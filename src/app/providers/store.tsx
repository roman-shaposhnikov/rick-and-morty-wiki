import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { withContext } from 'app/hocs/withContext'

export const store = configureStore({
  reducer: combineReducers({}),
})

export type Store = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const withStore = withContext(Provider, { store })

window.__store__ = store
