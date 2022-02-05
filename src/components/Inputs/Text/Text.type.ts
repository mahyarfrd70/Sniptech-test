import {ChangeEvent} from 'react';

export interface TextInputProps {
  label?: string;
  name: string;
  value: string;
  placeholder?: string;
  helperText?: string;
  onChange: (event: ChangeEvent) => void;
}
