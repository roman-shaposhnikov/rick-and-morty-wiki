import { createListenerMiddleware } from '@reduxjs/toolkit'
import { historyModel } from 'entities/history'
import { historyAPI } from 'shared/api/history'

export const historyMiddleware = createListenerMiddleware()

historyMiddleware.startListening({
  actionCreator: historyModel.actions.searchRequested,
  effect: async (action, api) => {
    const state = api.getState() as RootState
    const userId: string = state.user.info.id

    historyAPI.save(action.payload, userId)
  },
})

historyMiddleware.startListening({
  actionCreator: historyModel.actions.historyItemRemoved,
  effect: async (action, api) => {
    const state = api.getState() as RootState
    const userId: string = state.user.info.id

    historyAPI.remove(action.payload, userId)
  },
})
