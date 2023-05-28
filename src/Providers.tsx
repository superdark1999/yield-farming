import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import React from 'react'
import { Provider } from 'react-redux'
import store from 'state'
import { ModalProvider } from 'uikit/widgets/Modal'
import getLibrary from 'utils/web3React'

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')
interface Props {
  children: React.ReactNode
}
const Providers: React.FC<Props> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <RefreshContextProvider>
            <ModalProvider>{children}</ModalProvider>
          </RefreshContextProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default Providers
