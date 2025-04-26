import { characterApi } from 'entities/character'
import { episodeApi } from 'entities/episode'
import { userModel } from 'entities/user'

export const reducers = {
  user: userModel.reducer,
  [characterApi.reducerPath]: characterApi.reducer,
  [episodeApi.reducerPath]: episodeApi.reducer,
}
