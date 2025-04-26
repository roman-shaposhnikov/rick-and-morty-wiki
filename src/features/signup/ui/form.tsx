import { AuthForm } from 'entities/auth-form'
import { authValidator } from 'entities/data-validator'
import { userModel } from 'entities/user'
import { useAppDispatch } from 'shared/lib/redux'

type Props = {
  handleSignedUp: () => void
}

export function Form(props: Props) {
  const dispatch = useAppDispatch()

  return (
    <AuthForm
      topInputLabel='username'
      bottomInputLabel='password'
      topInputType='text'
      bottomInputType='text'
      buttonText='SIGN UP'
      formValidator={authValidator.credentials}
      handleSubmit={creds => {
        dispatch(userModel.operations.signup(creds))
          .unwrap()
          .then(props.handleSignedUp)
      }}
    />
  )
}
