/* eslint-disable no-console */
import { authValidator } from 'entities/data-validator'
import { userModel } from 'entities/user'
import { Credentials } from 'shared/api/auth'

export async function signin(creds: Credentials) {
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

  const { dispatch } = window.__store__

  try {
    const user = await dispatch(
      userModel.operations.signin(creds)
    ).unwrap()
    console.log(user)
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // 'err' definitely has the property 'message';
    // Doc link: https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions
    console.error(err?.message)
  }
}
