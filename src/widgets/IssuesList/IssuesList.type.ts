import {SearchFormValues} from '../../redux/reducers/SearchSlice/SearchSlice.type';

export interface IssuesListProps {
  onPageChange: (searchValues: SearchFormValues, page: number) => void;
}
export interface IssueListHookArgs {
  onPageChange: (searchValues: SearchFormValues, page: number) => void;
}
