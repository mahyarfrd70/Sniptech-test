import {SearchFormValues} from '../SearchSlice/SearchSlice.type';

export interface IssuesState {
  issues: any[];
  isLoading: boolean;
  error: boolean;
  pageCount: number | null;
  currentPage: number;
}

export interface FetchIssuesParams extends SearchFormValues {
  page: number;
}
