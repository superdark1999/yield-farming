import { createAsyncThunk } from '@reduxjs/toolkit'
import erc20ABI from 'config/abi/erc20.json'
import { getFaucetAddress, getStakingAddress } from 'utils/addressHelpers'
import multicall from 'utils/multicall'
import { simpleRpcProvider } from 'utils/providers'
import { USER_ACTION } from './constants'
const { FETCH_USER_TOKEN, FETCH_USER_MARKET_ALLOWANCE, FETCH_USER_BOX_AMOUNT } = USER_ACTION

export const fetchUserTokenData = createAsyncThunk<any, any>(FETCH_USER_TOKEN, async (account: string) => {
  const calls = []
  const faucetToken = getFaucetAddress()

  calls.push({ address: faucetToken, name: 'balanceOf', params: [account] })
  calls.push({
    address: faucetToken,
    name: 'allowance',
    params: [account, getStakingAddress()],
  })

  try {
    const bnbBalance = await simpleRpcProvider.getBalance(account)

    const [faucetBalance, faucetAllowance] = await multicall(erc20ABI, calls, {
      requireSuccess: false,
    })
    return {
      userTokenData: {
        bnb: {
          balance: bnbBalance.toString(),
        },
      },
      loaded: true,
    }
  } catch (error) {
    console.log('error fetchGameUserTokenInfo', error)
    return {
      userTokenData: {
        bnb: {
          balance: '0',
        },
      },
    }
  }
})
