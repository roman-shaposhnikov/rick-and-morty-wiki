import { authAPI, Credentials, User } from 'shared/api/auth'
import { createAppThunk } from 'shared/lib/redux'

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

export const signout = createAppThunk('user/signout', async () => {
  return authAPI.signout()
})

export const init = createAppThunk('user/shouldSignin', async () => {
  return authAPI.getUserStatus()
})
