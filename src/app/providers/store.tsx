import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userModel } from 'entities/user'
import { Provider } from 'react-redux'
import { withContext } from 'shared/lib/hocs'

const store = configureStore({
  reducer: combineReducers({
    user: userModel.reducer,
  }),
})

export const dispatch = store.dispatch

export type Store = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const withStore = withContext(Provider, { store })
