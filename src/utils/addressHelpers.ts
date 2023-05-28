import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'
import { getChainId } from './web3React'

// TODO : Improve
export const getAddress = (address: Address, chainId?: number): string => {
  const localStorageChainId = getChainId()
  // const mainNetChainId = 56
  const envChainId = process.env.REACT_APP_CHAIN_ID
  return address[localStorageChainId] ?? address[envChainId]
}

export const getMulticallAddress = (chainId?: number) => {
  return getAddress(addresses.mulltiCall, chainId)
}
export const getWbnbAddress = (chainId?: number) => {
  return getAddress(tokens.wbnb.address, chainId)
}

export const getBusdAddress = (chainId?: number) => {
  return getAddress(tokens.busd.address, chainId)
}
