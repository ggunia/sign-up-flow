import React from "react"
import { Grid, Button } from '@mui/material'
import { TextInput } from "../../../shared"

export const Credentials = () => {
  return (
    <Grid display="grid" gap={2} alignItems="start">
      <TextInput placeholder="Email" name="email" />
      <TextInput placeholder="Password" name="password" type="password" />

      <Button variant="contained" type="submit">Next: Bank details</Button>
    </Grid>
  )
}
