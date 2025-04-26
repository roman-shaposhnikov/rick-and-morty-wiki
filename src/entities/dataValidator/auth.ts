import * as yup from 'yup'

export const credentials = yup.object({
  username: yup.string().required().min(2),
  password: yup.string().required().min(6),
})
