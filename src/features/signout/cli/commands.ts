/* eslint-disable no-console */
import { userModel } from 'entities/user'

export async function signout(this: Cli) {
  try {
    await this.dispatch(userModel.operations.signout()).unwrap()
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // 'err' definitely has the property 'message';
    // Doc link: https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions
    console.error(err?.message)
  }
}
