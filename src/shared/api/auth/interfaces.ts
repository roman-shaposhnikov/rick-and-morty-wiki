export interface Credentials {
  username: string
  password: string
}

export interface User {
  id: string
  creds: Credentials
}

type Authenticate = (creds: Credentials) => Promise<User>

type SignIn = Authenticate
type SignUp = Authenticate
type SignOut = () => Promise<void>
type GetUserStatus = () => Promise<{
  isSignedIn: boolean
  id: string
}>

export interface AuthAPI {
  signin: SignIn
  signup: SignUp
  signout: SignOut
  getUserStatus: GetUserStatus
}
