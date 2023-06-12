export const STAKING_SLICE_NAME = 'staking'

interface ACTION {
  [key: string]: string
}
export const STAKING_ACTION: ACTION = {
  FETCH_STAKING_DATA: 'FETCH_STAKING_DATA',
}
Object.keys(STAKING_ACTION).forEach((key) => {
  STAKING_ACTION[key] = `${STAKING_SLICE_NAME}/${STAKING_ACTION[key]}`
})
