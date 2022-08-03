import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  FormHelperText
} from "@mui/material"
import { useField } from "formik"

type SelectInputProps = {
  name: string
  options: Array<{ value: string | number; label: string }>
} & SelectProps

export const SelectInput = ({ name, options, ...selectProps }: SelectInputProps) => {
  const [inputProps, { touched, error }] = useField(name)

  const hasError = touched && Boolean(error)

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

      {hasError && (
        <FormHelperText style={{ marginLeft: 4 }} error>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  )
}
