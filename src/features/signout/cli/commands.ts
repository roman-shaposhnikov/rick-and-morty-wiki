/* eslint-disable no-console */
import { userModel } from 'entities/user'
import { isAuthError } from 'shared/api/auth'

export async function signout(this: Cli) {
  try {
    await this.dispatch(userModel.operations.signout()).unwrap()
  } catch (err) {
    if (isAuthError(err)) {
      console.error(err.message)
    } else {
      console.log(err)
    }
  }
}
