import { Credentials, User } from '../interfaces'

const REGISTERED_USERS_LS_KEY = 'registered-users'
const CURRENT_USER_ID_LS_KEY = 'current-user-id'

export function shouldSignout(): boolean {
  return !!localStorage.getItem(CURRENT_USER_ID_LS_KEY)
}

export function getUsers(): User[] {
  const stringUsers = localStorage.getItem(REGISTERED_USERS_LS_KEY)

  if (stringUsers === null) {
    return []
  }

  return JSON.parse(stringUsers)
}

export function addUser(user: User) {
  const users = getUsers()

  users.push(user)

  localStorage.setItem(REGISTERED_USERS_LS_KEY, JSON.stringify(users))
}

export function findUserByCreds(
  creds: Credentials
): User | undefined {
  const users = getUsers()

  return users.find(
    u =>
      u.creds.username === creds.username &&
      u.creds.password === creds.password
  )
}

export function setCurrentUserId(id: string) {
  localStorage.setItem(CURRENT_USER_ID_LS_KEY, id)
}

export function getCurrentUserId(): string {
  return localStorage.getItem(CURRENT_USER_ID_LS_KEY) ?? ''
}
