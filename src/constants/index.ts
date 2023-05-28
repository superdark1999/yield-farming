// a list of tokens by chain

import { ChainId } from './enums'

export const NetworkContextName = 'NETWORK'

export const RPC_URLS: {
  [chainId in ChainId]?: string[]
} = {
  [ChainId.RINKEBY]: ['https://rinkeby.infura.io/v3/05dea8bed7fb40759b1fcc154e5e0dbd'],
  [ChainId.BSC]: [
    'https://bsc-dataseed.binance.org/',
    'https://bsc-dataseed1.defibit.io/',
    'https://bsc-dataseed1.ninicoin.io/',
  ],
  [ChainId.BSC_TESTNET]: [
    // 'https://data-seed-prebsc-1-s1.binance.org:8545',
    // 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    // 'https://data-seed-prebsc-1-s3.binance.org:8545/',
    'https://data-seed-prebsc-2-s2.binance.org:8545/',
    // 'https://data-seed-prebsc-2-s3.binance.org:8545/',
  ],
}

export const BLOCK_EXPLORER_URLS: {
  [chainId in ChainId]?: string[]
} = {
  [ChainId.RINKEBY]: ['https://rinkeby.etherscan.io/'],
  [ChainId.BSC]: ['https://bscscan.com'],
  [ChainId.BSC_TESTNET]: ['https://testnet.bscscan.com/'],
}

export const SCAN_SITES: {
  [chainId in ChainId]?: string
} = {
  [ChainId.BSC]: 'bscscan',
  [ChainId.BSC_TESTNET]: 'bscscan',
}

export const NETWORKS: {
  [chainId in ChainId]?: any
} = {
  [ChainId.BSC]: {
    chainId: `0x${ChainId.BSC.toString(16)}`,
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'bnb',
      decimals: 18,
    },
    rpcUrls: RPC_URLS[ChainId.BSC],
    blockExplorerUrls: BLOCK_EXPLORER_URLS[ChainId.BSC],
  },
  [ChainId.BSC_TESTNET]: {
    chainId: `0x${ChainId.BSC_TESTNET.toString(16)}`,
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'bnb',
      decimals: 18,
    },
    rpcUrls: RPC_URLS[ChainId.BSC_TESTNET],
    blockExplorerUrls: BLOCK_EXPLORER_URLS[ChainId.BSC_TESTNET],
  },
}

export const ALL_SUPPORTED_CHAIN_IDS: ChainId[] = [ChainId.BSC_TESTNET, ChainId.RINKEBY] // Todo: supported chainId
