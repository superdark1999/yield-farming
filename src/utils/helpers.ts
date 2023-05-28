const hasPrefix = (action: any, prefix: string) => action.type.startsWith(prefix)
const isPending = (action: any) => action.type.endsWith('/pending')
const isFulfilled = (action: any) => action.type.endsWith('/fulfilled')
const isRejected = (action: any) => action.type.endsWith('/rejected')

export const isPendingAction = (prefix: string) => (action: any) => {
  return hasPrefix(action, prefix) && isPending(action)
}

export const isRejectedAction = (prefix: string) => (action: any) => {
  return hasPrefix(action, prefix) && isRejected(action)
}

export const isFulfilledAction = (prefix: string) => (action: any) => {
  return hasPrefix(action, prefix) && isFulfilled(action)
}

export const numberWithCommas = (x: number) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const roundUsing = (func, number, prec) => {
  let tempnumber = number * 10 ** prec
  tempnumber = func(tempnumber)
  return tempnumber / 10 ** prec
}

export const formatAddress = (address) => {
  return `${address?.slice(0, 4)}...${address?.slice(38)}`
}
export const capitalizeFirstLetter = (string) => {
  return string?.replace(/\b(\w)/g, (s) => s.toUpperCase())
}
