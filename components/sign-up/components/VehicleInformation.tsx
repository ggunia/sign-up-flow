import { Button, Grid } from "@mui/material"
import { useField, useFormikContext } from "formik"

import { useListMakes, useListModels } from "../../../services"
import { FileInput, SelectInput } from "../../../shared"

export const VehicleInformation = () => {
  const { data = [] } = useListMakes()
  const { isSubmitting } = useFormikContext()
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

      <FileInput name="file" />

      <Button type="submit" variant="contained" disabled={isSubmitting}>
        Submit
      </Button>
    </Grid>
  )
}
