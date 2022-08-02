import { TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'

type TextInputProps = { name: string } & TextFieldProps

export const TextInput = ({ name, ...props }: TextInputProps) => {
  const [inputProps, { error }] = useField(name)

  return (
    <TextField
      size='small'
      helperText={error}
      error={Boolean(error)}
      {...inputProps}
      {...props}
    />
  )
}
