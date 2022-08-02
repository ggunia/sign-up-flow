import React from 'react'
import { Form, FormikProvider, useFormik } from 'formik'
import { Typography } from '@mui/material'

import {
  Credentials,
  BankInformation,
  VehicleInformation,
  useSignUp
} from '../../components/sign-up'
import { Container } from '@mui/system'


const Steps = () => {
  const { formik, step } = useSignUp()

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

          {step === 'credentials' && <Credentials />}
          {step === 'bank-information' && <BankInformation />}
          {step === 'vehicle-information' && <VehicleInformation />}
        </Container>
      </Form>
    </FormikProvider>
  )
}

export default Steps
