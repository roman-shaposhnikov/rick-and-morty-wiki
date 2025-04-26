export const USER_NOT_REGISTERED = 'UserNotRegistered'
export class UserNotRegisteredError extends Error {
  constructor() {
    super('The user must be registered before the sign in process')
    this.name = USER_NOT_REGISTERED
  }
}

export const USER_SHOULD_SIGNOUT = 'UserShouldSignout'
export class UserShouldSignoutError extends Error {
  constructor() {
    super(
      'The current user must sign out before the new user will be authenticated'
    )
    this.name = USER_SHOULD_SIGNOUT
  }
}
