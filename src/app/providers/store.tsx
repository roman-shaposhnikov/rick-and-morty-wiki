import { FC } from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: combineReducers({}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

window.__store__ = store

export function withStore(Component: FC<any>): FC<any> {
  return (props: any) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}
