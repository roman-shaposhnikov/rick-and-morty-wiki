export interface Credentials {
  username: string
  password: string
}

export interface User {
  id: string
  creds: Credentials
}

export interface UserStatus {
  isSignedIn: boolean
  id: string
}

export interface AuthError {
  name: string
  message: string
}

type Authenticate = (creds: Credentials) => Promise<User>

type SignIn = Authenticate
type SignUp = Authenticate
type SignOut = () => Promise<void>
type GetUserStatus = () => Promise<UserStatus>

export interface AuthAPI {
  signin: SignIn
  signup: SignUp
  signout: SignOut
  getUserStatus: GetUserStatus
}
