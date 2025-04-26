import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { characterApi } from 'entities/character'
import { userModel } from 'entities/user'
import { Provider } from 'react-redux'
import { withContext } from 'shared/lib/hocs'

const store = configureStore({
  reducer: combineReducers({
    user: userModel.reducer,
    [characterApi.reducerPath]: characterApi.reducer,
  }),
  middleware: getDefault =>
    getDefault().concat(characterApi.middleware),
})

export const dispatch = store.dispatch

export type Store = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const withStore = withContext(Provider, { store })
