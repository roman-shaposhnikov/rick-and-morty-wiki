import { characterApi } from 'entities/character'
import { episodeApi } from 'entities/episode'

import { favoritesMiddleware } from './favorites'
import { historyMiddleware } from './history'
import { protectMiddlewares } from './protect'

export const middlewares = [
  // protectMiddlewares must be placed before any other due to its functionality
  ...protectMiddlewares,

  historyMiddleware.middleware,
  favoritesMiddleware.middleware,

  characterApi.middleware,
  episodeApi.middleware,
]
