export type Credentials = {
  username: string
  password: string
}

export type User = {
  id: string
  creds: Credentials
}

type SignIn = (creds: Credentials) => User
type SignUp = (creds: Credentials) => User
type SignOut = () => void

export interface AuthAPI {
  signin: SignIn
  signup: SignUp
  signout: SignOut
}
