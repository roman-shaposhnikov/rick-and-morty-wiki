import { characterApi } from 'entities/character'
import { episodeApi } from 'entities/episode'

import { favoritesMiddleware } from './favorites'
import { historyMiddleware } from './history'

export const middlewares = [
  historyMiddleware.middleware,
  favoritesMiddleware.middleware,

  characterApi.middleware,
  episodeApi.middleware,
]
