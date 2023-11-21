import { characterApi } from 'entities/character'
import { episodeApi } from 'entities/episode'

import { historyMiddleware } from './history'

export const middlewares = [
  historyMiddleware,

  characterApi.middleware,
  episodeApi.middleware,
]
