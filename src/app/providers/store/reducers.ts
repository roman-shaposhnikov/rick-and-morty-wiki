import { combineReducers } from '@reduxjs/toolkit'
import { characterApi } from 'entities/character'
import { episodeApi } from 'entities/episode'
import { favoritesModel } from 'entities/favorites'
import { historyModel } from 'entities/history'
import { userModel } from 'entities/user'

export const rootReducer = combineReducers({
  user: userModel.reducer,
  history: historyModel.reducer,
  favorites: favoritesModel.reducer,
  [characterApi.reducerPath]: characterApi.reducer,
  [episodeApi.reducerPath]: episodeApi.reducer,
})
