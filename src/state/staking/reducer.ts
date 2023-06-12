import { createSlice } from '@reduxjs/toolkit'
import { AppState } from 'state'
import { StakingState } from 'state/types'
import { isFulfilledAction, isPendingAction, isRejectedAction } from '../../utils/helpers'
import { STAKING_SLICE_NAME } from './constants'

const initialState = {
  staking: {
    totalAmount: '0',
    myStakeAmount: '0',
    reward: '0',
    withdrawDate: '0',
  },

  isLoading: true,
  rebound: true,
  loaded: false,
} as StakingState

export const stakingSlice = createSlice({
  name: STAKING_SLICE_NAME,
  initialState,
  reducers: {
    setStakingState: (state: any, action) => {
      Object.keys(action?.payload || {}).forEach((key) => {
        state[key as keyof StakingState] = action.payload[key]
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isFulfilledAction(`${STAKING_SLICE_NAME}/`), (state: any, action) => {
        state.isLoading = false
        Object.keys(action?.payload || {}).forEach((key) => {
          state[key as keyof StakingState] = action.payload[key]
        })
        state.rebound = false
      })
      .addMatcher(isPendingAction(`${STAKING_SLICE_NAME}/`), (state) => {
        state.isLoading = true
      })
      .addMatcher(isRejectedAction(`${STAKING_SLICE_NAME}/`), (state) => {
        state.isLoading = false
        state.rebound = false
      })
  },
})

// Selectors

export const getUserLoadedSelector = (state: AppState) => state.user.loaded
export const getStakingSelector = (state: AppState) => state.staking.staking

export const getStakingReboundSelector = (state: AppState) => state.user.rebound
export const getUserLoadingSelector = (state: AppState) => state.user.isLoading
export const { setStakingState } = stakingSlice.actions
export default stakingSlice.reducer
