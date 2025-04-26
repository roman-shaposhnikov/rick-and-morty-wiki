import { createListenerMiddleware } from '@reduxjs/toolkit'
import { historyModel } from 'entities/history'
import { userModel } from 'entities/user'
import { historyAPI } from 'shared/api/history'

export const historyMiddleware = createListenerMiddleware()

historyMiddleware.startListening({
  actionCreator: historyModel.actions.searchRequest,
  effect: async (action, api) => {
    const state: RootState = api.getState() as RootState
    const userId: string = state.user.info.id

    if (!userId) {
      return
    }

    historyAPI.save(action.payload, userId)
  },
})

historyMiddleware.startListening({
  actionCreator: historyModel.actions.historyItemRemoved,
  effect: async (action, api) => {
    const state: RootState = api.getState() as RootState
    const userId: string = state.user.info.id

    if (!userId) {
      return
    }

    historyAPI.remove(action.payload, userId)
  },
})

historyMiddleware.startListening({
  actionCreator: userModel.operations.signout.fulfilled,
  effect: async (_, api) => {
    api.dispatch(historyModel.actions.userSignedOut())
  },
})
