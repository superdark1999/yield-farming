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
  calls.push({ address: stakingAddress, name: 'pools', params: [0] })

  try {
    const [userStakingData, poolData] = await multicall(stakingABI, calls, {
      requireSuccess: false,
    })

    const { amount } = poolData
    const { amount: userAmount, expectedInterestEndStaking, firstTimeDeposit } = userStakingData
    console.log('userStakingData: ', userStakingData)

    console.log(firstTimeDeposit.toString())

    const unlockTime = (+firstTimeDeposit.toString() + 900) * 1000
    console.log('unlockTime: ', unlockTime)
    return {
      staking: {
        totalAmount: amount.toString(),
        myStakeAmount: userAmount.toString(),
        reward: expectedInterestEndStaking.toString(),
        withdrawDate: unlockTime,
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
