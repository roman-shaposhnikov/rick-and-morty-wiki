export class UserNotRegisteredError extends Error {
  constructor() {
    super('The user must be registered before the sign in process')
    this.name = 'UserNotRegistered'
  }
}

export class UserAlreadyExistsError extends Error {
  constructor() {
    super('The user is already registered, just sign in')
    this.name = 'UserAlreadyExists'
  }
}

export class UserShouldSignoutError extends Error {
  constructor() {
    super(
      'The current user must sign out before the new user will be authenticated'
    )
    this.name = 'UserShouldSignout'
  }
}
