import {FormControl, InputLabel, MenuItem, Select as SelectField} from '@mui/material';
import styled from 'styled-components';
import {SelectProps} from '.';

const StyledInputLabel = styled(InputLabel)`
  margin-top: 4px;
  margin-left: 4px;
`;

const Select = ({label, options, name, value, placeholder, onChange}: SelectProps) => {
  return (
    <FormControl fullWidth>
      <StyledInputLabel variant="standard">{label}</StyledInputLabel>
      <SelectField placeholder={placeholder} name={name} value={value} onChange={onChange}>
        {options.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </SelectField>
    </FormControl>
  );
};

export default Select;
