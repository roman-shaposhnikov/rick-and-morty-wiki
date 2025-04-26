export type Credentials = {
  username: string
  password: string
}

export type User = {
  id: string
  creds: Credentials
}

type Authenticate = (creds: Credentials) => Promise<User>

type SignIn = Authenticate
type SignUp = Authenticate
type SignOut = () => Promise<void>

export interface AuthAPI {
  signin: SignIn
  signup: SignUp
  signout: SignOut
}
