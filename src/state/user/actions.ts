import { ethers, utils } from 'ethers'
import { createAsyncThunk } from '@reduxjs/toolkit'
import erc20ABI from 'config/abi/erc20.json'
import { formatEther } from 'ethers/lib/utils'
import { getBusdAddress } from 'utils/addressHelpers'
import multicall from 'utils/multicall'
import { simpleRpcProvider } from 'utils/providers'
import { USER_ACTION } from './constants'
import { getErc721Contract } from 'utils/contractHelpers'
import UsersAPI from 'api/actions/user'
const { FETCH_USER_TOKEN, FETCH_USER_MARKET_ALLOWANCE, FETCH_USER_BOX_AMOUNT } = USER_ACTION

export const fetchUserTokenData = createAsyncThunk<any, any>(FETCH_USER_TOKEN, async (account: string) => {
  const calls = []
  const busdToken = getBusdAddress()

  calls.push({ address: busdToken, name: 'balanceOf', params: [account] })
  try {
    const bnbBalance = await simpleRpcProvider.getBalance(account)
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
