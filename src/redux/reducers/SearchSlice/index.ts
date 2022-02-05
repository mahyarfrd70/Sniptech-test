import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SearchFormValues, ChangeFieldAction} from './SearchSlice.type';

const initialState: SearchFormValues = {
  issueType: 'organization',
  repository: '',
  state: 'open',
  sort: 'created',
};

const searchSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    changeField(state, action: PayloadAction<ChangeFieldAction>) {
      (state as any)[action.payload.name] = action.payload.value;
    },
  },
});

export const {changeField} = searchSlice.actions;
export default searchSlice.reducer;
