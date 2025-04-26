import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { withContext } from 'app/hocs/withContext'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: combineReducers({}),
})

export type Store = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const withStore = withContext(Provider, { store })

window.__store__ = store
