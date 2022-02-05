import {FC} from 'react';
import Select from '../../components/Inputs/Select';
import TextInput from '../../components/Inputs/Text';
import {Button} from '@mui/material';
import useSearchForm from './Search.hook';
import styled from 'styled-components';
import {FormProps, SearchFormProps} from '.';

const ISSUE_TYPE_OPTIONS = [
  {value: 'organization', label: 'Organizations'},
  {value: 'repository', label: 'Repository'},
];
const STATE_OPTIONS = [
  {value: 'open', label: 'Open'},
  {value: 'closed', label: 'Closed'},
  {value: 'all', label: 'All'},
];
const SORT_OPTIONS = [
  {value: 'created', label: 'Created Date'},
  {value: 'updated', label: 'Updated Date'},
  {value: 'comments', label: 'Ammount Of Commentss'},
];

const InputWrapper = styled.div`
  width: 50%;
`;

const Form = styled.form<FormProps>`
  display: flex;
  opacity: ${({isLoading}) => (isLoading ? 0.7 : 1)};
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    diplay: ${({isLoading}) => (isLoading ? 'block' : 'none')};
  }
`;

// TODO: validation for the form
const SearchForm: FC<SearchFormProps> = ({onSubmitForm}) => {
  const {searchValues, repositoryFieldLabel, isOrganization, isLoading, onChangeField, onSubmit} = useSearchForm({
    onSubmitForm,
  });
  return (
    <Form isLoading={isLoading}>
      <InputWrapper>
        <Select
          label="Issue Type"
          options={ISSUE_TYPE_OPTIONS}
          value={searchValues.issueType}
          name="issueType"
          onChange={onChangeField}
        />
      </InputWrapper>
      <InputWrapper>
        <TextInput
          placeholder={repositoryFieldLabel}
          helperText={isOrganization ? 'example: {org}' : 'example: {owner}/{repo}'}
          value={searchValues.repository}
          name="repository"
          onChange={onChangeField}
        />
      </InputWrapper>
      <InputWrapper>
        <Select
          label="State"
          options={STATE_OPTIONS}
          value={searchValues.state}
          name="state"
          onChange={onChangeField}
        />
      </InputWrapper>
      <InputWrapper>
        <Select label="Sort" options={SORT_OPTIONS} value={searchValues.sort} name="sort" onChange={onChangeField} />
      </InputWrapper>
      <Button onClick={onSubmit} color="primary" variant="contained">
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
