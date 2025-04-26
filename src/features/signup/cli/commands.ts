/* eslint-disable no-console */
import { authValidator } from 'entities/data-validator'
import { userModel } from 'entities/user'
import { Credentials, isAuthError } from 'shared/api/auth'

export async function signup(this: Cli, creds: Credentials) {
  try {
    await authValidator.credentials.validate(creds, {
      abortEarly: false,
    })
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    }
    return
  }

  try {
    const user = await this.dispatch(
      userModel.operations.signup(creds)
    ).unwrap()
    console.log(user)
  } catch (err) {
    if (isAuthError(err)) {
      console.error(err.message)
    } else {
      console.log(err)
    }
  }
}
