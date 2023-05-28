import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import getLibrary from 'utils/getLibrary'
import { BscConnector } from './bsc/bscConnector'
import { NetworkConnector } from './NetworkConnector'
import { ALL_SUPPORTED_CHAIN_IDS } from '../constants/index'
import { ChainId } from 'constants/enums'

const RPC = {
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org/',
  [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
}

export const NETWORK_CHAIN_ID: number = parseInt('56' ?? '56')

export const network = new NetworkConnector({
  urls: RPC,
  defaultChainId: 56,
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  // eslint-disable-next-line no-return-assign
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
})

export const bscConnector = new BscConnector({ supportedChainIds: [56, 97] })

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: RPC,
  // bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})
