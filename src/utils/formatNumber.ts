import BigNumber from 'bignumber.js/bignumber'
import { utils } from 'ethers'

export const formatUnits = (n: BigNumber, s: number): BigNumber => {
  return new BigNumber(n).div(10 ** s)
}

export const plus = (a: string, b: string): BigNumber => {
  return new BigNumber(a).plus(new BigNumber(b))
}

export function addCommas(nStr) {
  nStr += ''
  const x = nStr.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? '.' + x[1] : ''
  const rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1,$2')
  }
  return x1 + x2
}

export const maxNumberAfterDot = (s: string, n: number) => {
  const decimalPart = s.substring(s.lastIndexOf('.') + 1)
  if (!decimalPart) return s
  const roundedPart = s.substring(0, s.lastIndexOf('.'))

  return roundedPart + '.' + decimalPart.substring(0, n)
}

export const formatBalance = (balance) => {
  return addCommas(maxNumberAfterDot(utils.formatEther(balance), 2))
}
