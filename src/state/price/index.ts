/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PriceState, State } from 'state/types'
import axios from 'axios'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'
import { useSelector } from 'react-redux'

const initialState: PriceState = {
  isLoading: false,
  data: {
    bnbPrice: 0,
    busdPrice: 1,
  },
  rebound: true,
}

export const fetchPriceToken = async (address: string) => {
  try {
    const { data } = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/${address}`)
    return data.data.price
  } catch (error) {
    console.log('error price : ', error)
    return 0
  }
}

// Thunks
export const fetchPrices = createAsyncThunk('prices/fetch', async () => {
  const bnbPrice = await fetchPriceToken(getAddress(tokens.wbnb.address))

  return { bnbPrice, busdPrice: 1 }
})

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setPriceState: (state, action) => {
      Object.keys(action?.payload || {}).forEach((key) => {
        state[key as keyof any] = action.payload[key]
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPrices.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.rebound = false
    })
    builder.addCase(fetchPrices.rejected, (state, action) => {
      state.isLoading = false
      state.rebound = false
    })
  },
})

export const getPriceReboundSelector = (state) => state.prices?.rebound
export const usePriceSelector = () => {
  const prices = useSelector((state: State) => state.prices?.data)
  return prices
}

export const { setPriceState } = pricesSlice.actions

export default pricesSlice.reducer
