import { NoBscProviderError } from '@binance-chain/bsc-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { useCallback } from 'react'
import { connectorLocalStorageKey, ConnectorNames } from 'uikit/widgets/WalletModal'
import { setupNetwork } from 'utils/wallet'
import { connectorsByName } from 'utils/web3React'
import { useAppDispatch } from '../state'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const dispatch = useAppDispatch()

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID]
    if (connector) {
      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          const hasSetup = await setupNetwork()
          if (hasSetup) {
            activate(connector)
          }
        } else {
          window.localStorage.removeItem(connectorLocalStorageKey)
          if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
            alert('error instanceof')
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
            if (connector instanceof WalletConnectConnector) {
              const walletConnector = connector as WalletConnectConnector
              walletConnector.walletConnectProvider = null
            }
          } else {
            alert('error walletConnector')
          }
        }
      })
    } else {
      alert('error')
    }
  }, [])

  const logout = useCallback(() => {
    deactivate()
    window.localStorage.removeItem('account')
    window.localStorage.removeItem('connectorId')
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
  }, [deactivate])

  return { login, logout }
}

export default useAuth
