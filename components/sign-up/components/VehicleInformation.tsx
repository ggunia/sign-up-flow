import { Button, Grid } from "@mui/material"
import { SelectInput, TextInput } from "../../../shared"

export const VehicleInformation = () => {
  return (
    <Grid display="grid" gap={2}>
      <Grid display="grid" gridAutoFlow="column" columnGap={2}>
        <SelectInput name="make" label="Make" options={[]} />
        <SelectInput name="model" label="Model" options={[]} />
      </Grid>

      <TextInput name="file" type="file" />

      <Button variant="contained">Submit</Button>
    </Grid>
  )
}
