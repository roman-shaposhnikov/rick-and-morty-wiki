import { authAPI, Credentials, User } from 'shared/api/auth'
import { createAppThunk } from 'shared/lib/redux'

export const signin = createAppThunk<Credentials, User>(
  'user/signin',
  async creds => {
    return authAPI.signin(creds)
  }
)

export const signout = createAppThunk('user/signout', async () => {
  return authAPI.signout()
})
