import { isFulfilledAction, isPendingAction, isRejectedAction } from 'utils/helpers'
import { ConsoleSqlOutlined } from '@ant-design/icons'
import { createSlice } from '@reduxjs/toolkit'
import { lIMIT_ITEMS } from 'config'
// eslint-disable-next-line
import { IApplicationSliceState, State } from 'state/types'
import { APPLICATION_SLICE_NAME } from './constants'

const initialState = {
  filters: { limit: lIMIT_ITEMS, page: 1, sortBy: 'createdAt:desc' },
  settings: {},
  isLoading: true,
} as IApplicationSliceState

export const applicationSlice = createSlice({
  name: APPLICATION_SLICE_NAME,
  initialState,
  reducers: {
    setApplicationState: (state, action) => {
      Object.keys(action?.payload || {}).forEach((key) => {
        state[key as keyof IApplicationSliceState] = action.payload[key]
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isFulfilledAction(`${APPLICATION_SLICE_NAME}/`), (state: any, action) => {
        state.isLoading = false
        Object.keys(action?.payload || {}).forEach((key) => {
          state[key as keyof IApplicationSliceState] = action.payload[key]
        })
        state.rebound = false
      })
      .addMatcher(isPendingAction(`${APPLICATION_SLICE_NAME}/`), (state) => {
        state.isLoading = true
      })
      .addMatcher(isRejectedAction(`${APPLICATION_SLICE_NAME}/`), (state) => {
        state.isLoading = false
      })
  },
})

// Selectors
export const getSettingsSelector = (state: State) => state.application.settings

export const { setApplicationState } = applicationSlice.actions
export default applicationSlice.reducer
