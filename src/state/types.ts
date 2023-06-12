export type SerializedBigNumber = string

export interface PriceState {
  isLoading: boolean
  data: { bnbPrice: number; busdPrice: number }
  rebound: boolean
}

// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}

export interface UserState {
  userTokenData: {
    faucet: {
      balance: string
      isAllowance: boolean
    }
    bnb: {
      balance: string
    }
  }

  isLoading: boolean
  rebound: boolean
  loaded: boolean
}

export interface StakingState {
  staking: {
    totalAmount: string
    myStakeAmount: string
    reward: string
    withdrawDate: string
  }
  isLoading: boolean
  rebound: boolean
  loaded: boolean
}
export interface Sorts {
  price?: number // 1 for ascending and -1 for descending,
  // Below properties is default sort by descending
  updatedAt?: number // 1 for descending and 0 for not apply
}

export interface Fetching {
  button: boolean
  tokenId?: string
}

export interface MarketplaceState {
  fetching: Fetching
  rebound: boolean
  isLoading: boolean
}

export interface IApplicationSliceState {
  settings: any
  isLoading: boolean
}

// Global state
export interface State {
  application: IApplicationSliceState
  marketplace: MarketplaceState
  prices: PriceState
  user: UserState
}
