import { createListenerMiddleware } from '@reduxjs/toolkit'
import { historyModel } from 'entities/history'
import { historyAPI } from 'shared/api/history'

const historyMiddleware = createListenerMiddleware()

historyMiddleware.startListening({
  actionCreator: historyModel.actions.searchRequest,
  effect: async (action, api) => {
    const state: RootState = api.getState()
    const userId: string = state.user.info.id

    historyAPI.save(action.payload, userId)
  },
})

historyMiddleware.startListening({
  actionCreator: historyModel.actions.historyItemRemoved,
  effect: async (action, api) => {
    const state: RootState = api.getState()
    const userId: string = state.user.info.id

    historyAPI.remove(action.payload, userId)
  },
})

export const historyMiddlewares = [historyMiddleware.middleware]
