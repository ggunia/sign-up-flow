import * as Yup from 'yup'

export const validationSchema = {
  'credentials': Yup
    .object()
    .shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
  'bank-information': Yup
    .object()
    .shape({
      address: Yup.string().required(),
      city: Yup.string().required(),
      country: Yup.string().required(),
      iban: Yup.string().length(22).required(),
      swift: Yup.string().min(8).max(11).required(),
    }),
  'vehicle-information': Yup
    .object()
    .shape({
      make: Yup.string().required(),
      model: Yup.string().required(),
      file: Yup.mixed().required()
    })
}
