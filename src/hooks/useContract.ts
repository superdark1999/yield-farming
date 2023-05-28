// import { ROUTER_ADDRESSES, WNATIVE } from '@diviner-protocol/v2-sdk'
import { Contract } from '@ethersproject/contracts'
import { useActiveWeb3React } from 'hooks'
import { useMemo } from 'react'
import { getContract } from '../utils'
import ERC20_ABI from '../constants/abis/erc20.json'
import { getErc721Contract, getBep20Contract } from '../utils/contractHelpers'

export function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useActiveWeb3React()
  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export const useERC20 = (address: string) => {
  const { library } = useActiveWeb3React()
  const signer = library.getSigner()
  return useMemo(() => getBep20Contract(address, signer), [address, signer])
}

export const useERC721 = (address: string) => {
  const { library } = useActiveWeb3React()
  const signer = library.getSigner()
  return useMemo(() => getErc721Contract(address, signer), [address, signer])
}
