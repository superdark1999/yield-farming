import React from 'react'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import { connectorLocalStorageKey } from './config'
import { Login, Config } from './types'
import styled from 'styled-components'

interface Props {
  walletConfig: Config
  login: Login
  onDismiss: () => void
  mb: string
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig
  return (
    <Button
      className="button-connect"
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId)
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId)
        onDismiss()
      }}
      style={{ justifyContent: 'space-between', backgroundColor: '#444444' }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="primary">
        {title}
      </Text>
      <BoxContainer>
        <BoxIcon>
          <Icon width="32px" />
        </BoxIcon>
        <Circle className="circle"></Circle>
      </BoxContainer>
    </Button>
  )
}

const BoxContainer = styled.div`
  position: relative;

  &:hover {
    .circle {
      display: block;
      border-radius: 50%;
      background-color: #e2e2e2a8;
      width: 70px;
      height: 70px;
      top: 11px;
      left: 11px;
      position: absolute;
      opacity: 0;
      animation: scaleIn 1.5s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);
    }
  }
`

const BoxIcon = styled.div`
  border-radius: 50%;
  padding: 10px;

  svg {
    width: 70px;
  }
`

const Circle = styled.div`
  display: none;
`

export default WalletCard
