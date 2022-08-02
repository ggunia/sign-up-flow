import { Button, Grid } from "@mui/material"
import { useField } from "formik"

import { useListMakes, useListModels } from "../../../services"
import { SelectInput, TextInput } from "../../../shared"

export const VehicleInformation = () => {
  const { data = [] } = useListMakes()
  const [{ value }] = useField('make')
  const { data: models = [] } = useListModels(value)

  return (
    <Grid display="grid" gap={2}>
      <Grid display="grid" gridAutoFlow="column" columnGap={2}>
        <SelectInput
          name="make"
          label="Make"
          options={data.map(curr => ({ value: curr.toLowerCase(), label: curr }))}
        />

        <SelectInput
          name="model"
          label="Model"
          options={models.map(curr => ({ value: curr.id, label: curr.model }))}
        />
      </Grid>

      <TextInput name="file" type="file" />

      <Button variant="contained">Submit</Button>
    </Grid>
  )
}
