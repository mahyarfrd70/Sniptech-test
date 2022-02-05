import {FormControl, InputLabel, TextField} from '@mui/material';
import {TextInputProps} from '.';

const TextInput = ({label, value, name, placeholder, helperText, onChange}: TextInputProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={`${name}-id`}>{label}</InputLabel>
      <TextField
        name={name}
        id={`${name}-id`}
        helperText={helperText}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default TextInput;
