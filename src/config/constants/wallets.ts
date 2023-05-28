import { ConfigWallets } from 'config/constants/types'
import { ConnectorNames } from 'uikit/widgets/WalletModal'
const connectors: ConfigWallets[] = [
  {
    title: 'Metamask',
    icon: 'metamask.png',
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    icon: 'trust-wallet.png',
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: 'WalletConnect',
    icon: 'wallet-connect.png',
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: 'BinanceWallet',
    icon: 'binance-wallet.png',
    connectorId: ConnectorNames.BSC,
  },
]

export default connectors
