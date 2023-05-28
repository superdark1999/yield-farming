import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import application from 'state/application/reducer'
import user from './user/reducer'

type MergedState = {
  user: {
    [key: string]: any
  }
  transactions: {
    [key: string]: any
  }
}
const PERSISTED_KEYS: string[] = ['user', 'transactions']

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    application,
    user,
  },
  // middleware: [...(getDefaultMiddleware({ thunk: false }) as any), save({ states: PERSISTED_KEYS })],
  // preloadedState: loadedState,
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppState = ReturnType<typeof store.getState>

export default store
