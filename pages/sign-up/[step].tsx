import React from 'react'
import { useRouter } from "next/router"
import { Form, FormikProvider, useFormik } from 'formik'
import { Typography } from '@mui/material'

import {
  Credentials,
  BankInformation,
  VehicleInformation,
  initialValues,
  validationSchema
} from '../../components/sign-up'
import { Container } from '@mui/system'

const Steps = () => {
  const router = useRouter()
  const { step } = router.query
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema[step as 'credentials' | 'bank-information' | 'vehicle-information'],
    onSubmit: () => {
      alert('here !!')
    }
  })

  const component = React.useMemo(
    () => {
      switch (step) {
        case 'credentials':
          return <Credentials />
        case 'bank-information':
          return <BankInformation />
        case 'vehicle-information':
          return <VehicleInformation />
        default:
          return null
      }
    },
    [step]
  )

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <Container maxWidth='sm'>
          <Typography variant='h5' marginTop={5}>
            Registration multi step form
          </Typography>

          <Typography
            variant='body2'
            marginBottom={3}
            marginTop={0.5}
            color="grey"
          >
            Please fill all fields
          </Typography>

          {component}
        </Container>
      </Form>
    </FormikProvider>
  )
}

export default Steps
