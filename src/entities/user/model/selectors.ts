export const id = (state: RootState) => state.user.info.id
export const type = (state: RootState) => state.user.type
export const isSignedIn = (state: RootState) =>
  state.user.type === 'user'
