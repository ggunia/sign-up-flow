import React from "react"
import { useRouter } from "next/router"
import { useFormik } from "formik"

import { useSignUpService } from "../../../services"
import { initialValues, validationSchema } from '../form'

type Step = 'credentials'
  | 'bank-information'
  | 'vehicle-information'

export const useSignUp = () => {
  const router = useRouter()
  const signUp = useSignUpService()
  const { step } = router.query
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema[step as Step],
    onSubmit: (values) => {
      if (step === 'credentials') {
        router.push('/sign-up/bank-information')
        return Promise.resolve()
      }

      if (step === 'bank-information') {
        router.push('/sign-up/vehicle-information')
        return Promise.resolve()
      }

      const { file, ...body } = values
      const formData = new FormData()
      formData.set('file', file as unknown as Blob)
      formData.set('data', JSON.stringify(body))

      return signUp.mutateAsync(formData)
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
