import { createSlice } from '@reduxjs/toolkit'
import { AppState } from 'state'
import { State, UserState } from 'state/types'
import { isFulfilledAction, isPendingAction, isRejectedAction } from '../../utils/helpers'
import { USER_SLICE_NAME } from './constants'

const initialState = {
  userTokenData: {
    stf: {
      balance: '0',
      allowance: '0',
      isAllowance: false,
      isAllowanceBoxInteraction: false,
    },
    stfa: {
      balance: '0',
      allowance: '0',
      isAllowance: false,
      isAllowanceBoxInteraction: false,
    },
    busd: {
      balance: '0',
      allowance: '0',
      isAllowance: false,
      isAllowanceBoxInteraction: false,
    },
    bnb: {
      balance: '0',
    },
  },

  isApprovalShoe: false,
  isApprovalBox: false,
  isLoading: true,
  rebound: true,
  loaded: false,
} as UserState

export const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {
    setUserState: (state: any, action) => {
      Object.keys(action?.payload || {}).forEach((key) => {
        state[key as keyof UserState] = action.payload[key]
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isFulfilledAction(`${USER_SLICE_NAME}/`), (state: any, action) => {
        state.isLoading = false
        Object.keys(action?.payload || {}).forEach((key) => {
          state[key as keyof UserState] = action.payload[key]
        })
        state.rebound = false
      })
      .addMatcher(isPendingAction(`${USER_SLICE_NAME}/`), (state) => {
        state.isLoading = true
      })
      .addMatcher(isRejectedAction(`${USER_SLICE_NAME}/`), (state) => {
        state.isLoading = false
        state.rebound = false
      })
  },
})

// Selectors

export const getUserLoadedSelector = (state: AppState) => state.user.loaded
export const getUserTokenDataSelector = (state: AppState) => state.user.userTokenData

export const getUserReboundSelector = (state: AppState) => state.user.rebound
export const getUserLoadingSelector = (state: AppState) => state.user.isLoading
export const isApprovedShoeSelector = (state: State) => state.user.isApprovalShoe
export const isApprovedBoxSelector = (state: State) => state.user.isApprovalBox
export const { setUserState } = userSlice.actions
export default userSlice.reducer
