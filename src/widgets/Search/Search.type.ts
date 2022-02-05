import {SearchFormValues} from '../../redux/reducers/SearchSlice/SearchSlice.type';

export interface FormProps {
  isLoading: boolean;
}

export interface SearchFormHookArgs {
  onSubmitForm: (values: SearchFormValues) => void;
}

export interface SearchFormProps {
  onSubmitForm: (values: SearchFormValues) => void;
}
