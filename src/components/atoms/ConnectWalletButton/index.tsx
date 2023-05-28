import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { Button, ButtonProps } from 'uikit/components/Button'
import { useWalletModal } from 'uikit/widgets/WalletModal'
import useAuth from '../../../hooks/useAuth'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const { account } = useWeb3React()

  const { login, logout } = useAuth()

  const { onPresentConnectModal } = useWalletModal(login, logout, account as string)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      Unlock Wallet
    </Button>
  )
}

export default UnlockButton
