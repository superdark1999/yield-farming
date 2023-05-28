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
    busd: {
      balance: string
      allowance: string
      isAllowance: boolean
      isAllowanceBoxInteraction: boolean
    }
    bnb: {
      balance: string
    }
  }

  isApprovalShoe: boolean
  isApprovalBox: boolean
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
