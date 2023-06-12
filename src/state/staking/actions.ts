import { createAsyncThunk } from '@reduxjs/toolkit'
import stakingABI from 'config/abi/staking.json'
import { getStakingAddress } from 'utils/addressHelpers'
import multicall from 'utils/multicall'
import { STAKING_ACTION } from './constants'
const { FETCH_STAKING_DATA } = STAKING_ACTION

export const fetchStakingData = createAsyncThunk<any, any>(FETCH_STAKING_DATA, async (account: string) => {
  const calls = []
  const stakingAddress = getStakingAddress()

  calls.push({ address: stakingAddress, name: 'users', params: [0, account] })

  try {
    const [userStakingData] = await multicall(stakingABI, calls, {
      requireSuccess: false,
    })
    const { amount, expectedInterestEndStaking } = userStakingData

    console.log(userStakingData)
    return {
      staking: {
        totalAmount: '0',
        myStakeAmount: amount.toString(),
        reward: expectedInterestEndStaking.toString(),
        withdrawDate: '0',
      },
      rebound: false,
      loaded: true,
    }
  } catch (error) {
    console.log('error fetchStakingData', error)
    return {
      userTokenData: {
        bnb: {
          balance: '0',
        },
      },
    }
  }
})
