import {useCallback} from 'react';
import {useAppSelector} from '../../redux/store';
import {IssueListHookArgs} from './IssuesList.type';

const useIssuesList = ({onPageChange}: IssueListHookArgs) => {
  const {isLoading, error, issues, pageCount, currentPage} = useAppSelector((state) => state.Issues);
  const searchValues = useAppSelector((state) => state.Search);

  const changePage = useCallback(
    (_event, newPage) => {
      onPageChange(searchValues, newPage);
    },
    [searchValues],
  );

  return {isLoading, error, issues, pageCount, currentPage, changePage};
};

export default useIssuesList;
