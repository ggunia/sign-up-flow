import { TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'

type TextInputProps = { name: string } & TextFieldProps

export const TextInput = ({ name, ...props }: TextInputProps) => {
  const [inputProps, { error, touched }] = useField(name)

  const hasError = touched && Boolean(error)

  return (
    <TextField
      size='small'
      FormHelperTextProps={{ style: { marginLeft: 4 } }}
      {...hasError ? { helperText: error, error: true } : {}}
      {...inputProps}
      {...props}
    />
  )
}
