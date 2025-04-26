import { historyAPI } from 'shared/api/history'
import { createAppThunk } from 'shared/lib/redux'

export const getHistory = createAppThunk(
  'history/getHistory',
  async (_, api) => {
    const state: RootState = api.getState()
    const userId: string = state.user.info.id

    return historyAPI.getAll(userId)
  }
)
