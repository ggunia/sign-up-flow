import { ChangeEvent } from "react"
import { TextField } from "@mui/material"
import { useField } from "formik"

type FileInputProps = {
  name: string
}

export const FileInput = ({ name, ...props }: FileInputProps) => {
  const [inputProps, { error, touched }, { setValue }] = useField(name)

  const hasError = touched && Boolean(error)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [file] = Array.from(event.target.files ?? [])
    setValue(file)
  }

  return (
    <TextField
      size="small"
      type="file"
      {...hasError ? { helperText: error, error: true } : {}}
      {...inputProps}
      {...props}
      value={inputProps.value?.filename}
      onChange={onChange}
    />
  )
}
