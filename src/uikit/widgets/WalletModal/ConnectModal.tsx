import React from 'react'
import styled from 'styled-components'
import { Link } from '../../components/Link'
import { HelpIcon } from '../../components/Svg'
import { Modal } from '../Modal'
import WalletCard from './WalletCard'
import config from './config'
import { Login } from './types'

interface Props {
  login: Login
  onDismiss?: () => void
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    <BoxWrapper>
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 1 ? '8px' : '0'}
        />
      ))}
    </BoxWrapper>
    <HelpLink href="http://docs.luckyswap.io" external>
      <HelpIcon color="primary" />
      Learn how to connect
    </HelpLink>
  </Modal>
)

export default ConnectModal
