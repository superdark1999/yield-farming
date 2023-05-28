import { Web3Provider } from '@ethersproject/providers'
import { bscConnector, injected, walletconnect } from 'connectors'
import { ethers } from 'ethers'
import { ConnectorNames } from 'uikit/widgets/WalletModal'

// const injected = new InjectedConnector({ supportedChainIds: [chainId] })
// const injected = new InjectedConnector({ supportedChainIds: [56, 97, 137, 80001] })

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
}

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 15_000
  return library
}

export const getChainId = (): number => {
  return parseInt(window.localStorage.getItem('chainId') || process.env.REACT_APP_CHAIN_ID) as number
}
