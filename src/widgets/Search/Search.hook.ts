import {upperFirst} from 'lodash-es';
import {useCallback, useEffect, useMemo} from 'react';
import {SearchFormHookArgs} from '.';
import {changeField} from '../../redux/reducers/SearchSlice';
import {useAppDispatch, useAppSelector} from '../../redux/store';

const useSearchForm = ({onSubmitForm}: SearchFormHookArgs) => {
  const dispatch = useAppDispatch();
  const searchValues = useAppSelector((state) => state.Search);
  const {isLoading} = useAppSelector((state) => state.Issues);

  // after changing the issue type , this hook will reset the repository name.
  useEffect(() => {
    if (searchValues.repository) dispatch(changeField({name: 'repository', value: ''}));
  }, [searchValues.issueType, dispatch]);

  const onChangeField = useCallback(
    (e) => {
      const {name, value} = e.target;
      dispatch(changeField({name, value}));
    },
    [dispatch],
  );

  const onSubmit = useCallback(() => {
    if (searchValues.repository) {
      onSubmitForm(searchValues);
    }
  }, [dispatch, searchValues]);

  const repositoryFieldLabel = useMemo(() => `${upperFirst(searchValues.issueType)} Name`, [searchValues.issueType]);
  const isOrganization = useMemo(() => searchValues.issueType === 'organization', [searchValues.issueType]);

  return {searchValues, repositoryFieldLabel, isOrganization, isLoading, onSubmit, onChangeField};
};

export default useSearchForm;
