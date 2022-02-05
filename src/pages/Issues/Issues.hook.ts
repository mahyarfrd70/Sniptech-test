import {useCallback} from 'react';
import {fetchIssues} from '../../redux/reducers/IssuesSlice';
import {useAppDispatch} from '../../redux/store';

const useIssues = () => {
  const dispatch = useAppDispatch();

  const fetchNewIssues = useCallback((searchedValues, page = 1) => {
    const params = {...searchedValues, page};
    dispatch(fetchIssues(params));
  }, []);

  return {fetchNewIssues};
};

export default useIssues;
