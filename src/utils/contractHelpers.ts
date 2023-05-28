import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'

import multicall from 'config/abi/Multicall.json'
import { ethers } from 'ethers'
// Addresses
import { ChainId } from 'constants/enums'
import { getMulticallAddress } from 'utils/addressHelpers'
import { simpleRpcProvider } from 'utils/providers'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}
export const getErc721Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(erc721Abi, address, signer)
}

export const getMulticallContract = (signer?: ethers.Signer | ethers.providers.Provider, chainId?: ChainId) => {
  return getContract(multicall, getMulticallAddress(), signer)
}
