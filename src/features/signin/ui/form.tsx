import { Alert } from '@mui/material'
import { SerializedError } from '@reduxjs/toolkit'
import { AuthForm } from 'entities/auth-form'
import { authValidator } from 'entities/data-validator'
import { userModel } from 'entities/user'
import { useSelector } from 'react-redux'
import { USER_NOT_REGISTERED } from 'shared/api/auth'
import { useAppDispatch } from 'shared/lib/redux'

export function Form() {
  const dispatch = useAppDispatch()

  const authError = useSelector(userModel.selectors.error)

  return (
    <>
      <FormError err={authError} />
      <AuthForm
        topInputLabel='username'
        bottomInputLabel='password'
        topInputType='text'
        bottomInputType='password'
        buttonText='SIGN IN'
        formValidator={authValidator.credentials}
        handleSubmit={creds => {
          dispatch(userModel.operations.signin(creds))
        }}
      />
    </>
  )
}

// TODO: move to modal & set timer to close
export function FormError(props: { err: SerializedError | null }) {
  if (props.err?.name === USER_NOT_REGISTERED) {
    return (
      <Alert severity='info'>
        You are not registered! Please follow to Sign Up page.
      </Alert>
    )
  }

  return null
}
