import { favoritesMiddlewares } from './favorites'
import { historyMiddlewares } from './history'
import { rtkApiMiddlewares } from './rtk-api'

export const middlewares = [
  ...rtkApiMiddlewares,
  ...historyMiddlewares,
  ...favoritesMiddlewares,
]
