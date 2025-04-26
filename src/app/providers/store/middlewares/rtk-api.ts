import { characterApi } from 'entities/character'
import { episodeApi } from 'entities/episode'

export const rtkApiMiddlewares = [
  characterApi.middleware,
  episodeApi.middleware,
]
