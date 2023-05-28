import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'
import { useWalletModal } from '../../WalletModal'
import { Login } from '../../WalletModal/types'

interface Props {
  account?: string
  login: Login
  logout: () => void
  balanceBNB?: string
  chainId?: number
}

const UserBlock: React.FC<Props> = ({ balanceBNB, account, login, logout, chainId }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account)

  const getBalanceUnit = () => {
    switch (chainId) {
      case 56:
      case 97:
        return 'BNB'
      case 137:
      case 80001:
        return 'MATIC'
      default:
        return 'BNB'
    }
  }

  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  return (
    <div>
      {account ? (
        <Button
          className="btn-supply custom-btn"
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal()
          }}
        >
          <BoxBNB>
            <span className="wallet-balance-amount">{balanceBNB || 0}</span>
            <span>{getBalanceUnit()}</span>
          </BoxBNB>
          <CodeWallet>{accountEllipsis}</CodeWallet>
        </Button>
      ) : (
        <Button
          scale="sm"
          className="btn-supply"
          onClick={() => {
            onPresentConnectModal()
          }}
        >
          Connect
        </Button>
      )}
    </div>
  )
}

const BoxBNB = styled.span`
  display: flex;

  .wallet-balance-amount {
    @media (max-width: 768px) {
      display: inline-block;
      width: 74px;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
    }
  }
`

const CodeWallet = styled.div`
  background: #b3901d;
  padding: 0 12px;
  border-radius: 8px;
  margin-left: 10px;
  color: #fff;
`

export default UserBlock
