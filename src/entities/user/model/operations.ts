import { authAPI, Credentials, User } from 'shared/api/auth'
import { createAppThunk, userSignedOut } from 'shared/lib/redux'

export const signin = createAppThunk<Credentials, User>(
  'user/signin',
  async creds => {
    return authAPI.signin(creds)
  }
)

export const signup = createAppThunk<Credentials, User>(
  'user/signup',
  async creds => {
    return authAPI.signup(creds)
  }
)

export const signout = createAppThunk(
  'user/signout',
  async (_, api) => {
    await authAPI.signout()
    api.dispatch(userSignedOut())
  }
)

export const init = createAppThunk('user/shouldSignin', async () => {
  return authAPI.getUserStatus()
})
