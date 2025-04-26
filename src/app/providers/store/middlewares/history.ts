import { createListenerMiddleware } from '@reduxjs/toolkit'
import { historyModel } from 'entities/history'
import { historyAPI } from 'shared/api/history'

import { AppStartListening } from './lib'

export const historyMiddleware = createListenerMiddleware()

export const startAppListening =
  historyMiddleware.startListening as AppStartListening

startAppListening({
  actionCreator: historyModel.actions.searchRequested,
  effect: async (action, api) => {
    const state = api.getState()
    const userId: string = state.user.info.id

    historyAPI.save(action.payload, userId)
  },
})

startAppListening({
  actionCreator: historyModel.actions.historyItemRemoved,
  effect: async (action, api) => {
    const state = api.getState()
    const userId: string = state.user.info.id

    historyAPI.remove(action.payload, userId)
  },
})
