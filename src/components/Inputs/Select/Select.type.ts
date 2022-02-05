import {SelectChangeEvent} from '@mui/material';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: SelectChangeEvent) => void;
}
