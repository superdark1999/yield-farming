import GlobalModal from 'components/molecules/GlobalModal/GlobalModal'
import ConnectWalletModal from 'components/molecules/Modal/ConnectWalletModal/ConnectWalletModal'
import useAccount from 'hooks/useAccount'
import useAuth from 'hooks/useAuth'
import React from 'react'
import styled from 'styled-components'

export default function Home() {
  const account = useAccount()
  const handleShowConnectWalletModel = () => {
    GlobalModal.show(<ConnectWalletModal onClose={GlobalModal.hide} />)
  }

  const { logout } = useAuth()

  return (
    <HomeStyled>
      {account ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={handleShowConnectWalletModel}>Connect wallet</button>
      )}
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: grid;
  place-items: center;
`
