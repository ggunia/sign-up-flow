import React from "react"
import { Button, Grid } from "@mui/material"
import { TextInput } from "../../../shared"

export const BankInformation = () => {
  return (
    <Grid display="grid" gap={2}>
      <TextInput name="address" placeholder="Address" />

      <Grid display="grid" gridAutoFlow="column" columnGap={2}>
        <TextInput name="city" placeholder="City" />
        <TextInput name="country" placeholder="Country" />
      </Grid>

      <TextInput name="iban" placeholder="IBAN" />
      <TextInput name="swift" placeholder="Swift code" />

      <Button type="submit" variant="contained">
        Continue: vehicle information
      </Button>
    </Grid>
  )
}
