import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import parseLinkHeader from 'parse-link-header';
import {githubService} from '../../../utils/axios';
import {FetchIssuesParams, IssuesState} from './IssuesSlice.type';

const initialState: IssuesState = {
  issues: [],
  isLoading: false,
  error: false,
  pageCount: null,
  currentPage: 1,
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    startFetchingIssues: (state): void => {
      state.isLoading = true;
      state.error = false;
      state.issues = [];
    },
    fullfiledFetchingIssues: (state, action): void => {
      state.isLoading = false;
      state.error = false;
      state.issues = action.payload;
    },
    rejectingFetchingIssues: (state): void => {
      state.isLoading = false;
      state.error = true;
      state.issues = [];
    },
    setPageHeader: (state, action): void => {
      state.pageCount = action.payload;
    },
    setCurrentPage: (state, action): void => {
      state.currentPage = action.payload;
    },
  },
});

const {startFetchingIssues, fullfiledFetchingIssues, rejectingFetchingIssues, setPageHeader, setCurrentPage} =
  issuesSlice.actions;

export const fetchIssues = createAsyncThunk('issues/getAllIssues', async (params: FetchIssuesParams, {dispatch}) => {
  try {
    dispatch(startFetchingIssues());
    const {repository, issueType, ...restParams} = params;
    const path = issueType === 'organization' ? `/orgs/${repository}/issues` : `/repos/${repository}/issues`;
    const response = await githubService(path, {
      params: restParams,
    });
    const parsedResponseLinkHeader = parseLinkHeader(response.headers.link);
    dispatch(setCurrentPage(restParams.page));
    if (parsedResponseLinkHeader?.last) dispatch(setPageHeader(Number(parsedResponseLinkHeader?.last.page)));
    dispatch(fullfiledFetchingIssues(response.data));
  } catch {
    dispatch(rejectingFetchingIssues());
  }
});

export default issuesSlice.reducer;
