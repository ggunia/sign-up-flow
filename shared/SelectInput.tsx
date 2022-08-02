import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps
} from "@mui/material"
import { useField } from "formik"

type SelectInputProps = {
  name: string
  options: Array<{ value: string | number; label: string }>
} & SelectProps

export const SelectInput = ({ name, options, ...selectProps }: SelectInputProps) => {
  const [inputProps] = useField(name)

  return (
    <FormControl fullWidth>
      <InputLabel size="small" id="demo-simple-select-label">{selectProps.label}</InputLabel>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        {...selectProps}
        {...inputProps}
      >
        {options.map(option => (
          <MenuItem dense key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
