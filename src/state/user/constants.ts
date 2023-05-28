export const USER_SLICE_NAME = 'user'

interface ACTION {
  [key: string]: string
}
export const USER_ACTION: ACTION = {
  FETCH_USER_TOKEN: 'FETCH_USER_TOKEN',
  FETCH_USER_MARKET_ALLOWANCE: 'FETCH_USER_MARKET_ALLOWANCE',
  FETCH_USER_BOX_AMOUNT: 'FETCH_USER_BOX_AMOUNT',
}
Object.keys(USER_ACTION).forEach((key) => {
  USER_ACTION[key] = `${USER_SLICE_NAME}/${USER_ACTION[key]}`
})
