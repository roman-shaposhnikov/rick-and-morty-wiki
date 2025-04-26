import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { withContext } from 'shared/lib/hocs'

import { middlewares } from './middlewares'
import { rootReducer } from './reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefault => getDefault().concat(...middlewares),
})

export const dispatch = store.dispatch
export const getState = store.getState

export type Store = typeof store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const withStore = withContext(Provider, { store })
