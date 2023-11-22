import { favoritesAPI } from 'shared/api/favorites'
import { createAppThunk } from 'shared/lib/redux'

export const getFavorites = createAppThunk(
  'favorites/getFavorites',
  async (_, api) => {
    const state: RootState = api.getState()
    const userId: string = state.user.info.id

    return favoritesAPI.getAll(userId)
  }
)
