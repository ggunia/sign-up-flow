import React from "react"
import { useRouter } from "next/router"
import { useFormik } from "formik"

import { initialValues, validationSchema } from '../form'

type Step = 'credentials'
  | 'bank-information'
  | 'vehicle-information'

export const useSignUp = () => {
  const router = useRouter()
  const { step } = router.query
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema[step as Step],
    onSubmit: (values) => {
      if (step === 'credentials') {
        router.push('/sign-up/bank-information')
        return
      }

      if (step === 'bank-information') {
        router.push('/sign-up/vehicle-information')
        return
      }

      alert(JSON.stringify(values))
    }
  })

  React.useEffect(
    () => {
      if (step === 'credentials') return
      if (formik.dirty) return

      router.push('/sign-up/credentials')
    },
    [step]
  )

  return { formik, step }
}
