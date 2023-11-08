import { UserNotRegistered, UserShouldSignout } from '../errors'
import { Credentials, User } from '../interfaces'

const REGISTERED_USERS_LS_KEY = 'registered-users'
const CURRENT_USER_ID_LS_KEY = 'current-user-id'

export async function signin(creds: Credentials) {
  if (shouldSignout()) {
    throw new UserShouldSignout()
  }

  const string_users = localStorage.getItem(REGISTERED_USERS_LS_KEY)

  if (string_users === null) {
    throw new UserNotRegistered()
  }

  const users: User[] = JSON.parse(string_users)

  const user = users.find(
    ({ creds: { username, password } }) =>
      username === creds.username && password === creds.password
  )

  if (user === undefined) {
    throw new UserNotRegistered()
  }

  return user
}

export async function signup(creds: Credentials) {
  const string_users = localStorage.getItem(REGISTERED_USERS_LS_KEY)

  const users: User[] =
    string_users !== null ? JSON.parse(string_users) : []

  const newUser: User = { id: Date.now().toString(), creds }

  users.push(newUser)

  localStorage.setItem(REGISTERED_USERS_LS_KEY, JSON.stringify(users))

  return newUser
}

function shouldSignout() {
  return !!localStorage.getItem(CURRENT_USER_ID_LS_KEY)
}

export async function signout() {
  localStorage.setItem(CURRENT_USER_ID_LS_KEY, '')
}
