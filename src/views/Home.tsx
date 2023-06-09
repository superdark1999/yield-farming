import GlobalModal from 'components/molecules/GlobalModal/GlobalModal'
import ConnectWalletModal from 'components/molecules/Modal/ConnectWalletModal/ConnectWalletModal'
import useAccount from 'hooks/useAccount'
import useAuth from 'hooks/useAuth'
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
        <div>
          <div>{account}</div>
          <button onClick={logout}> logout</button>
        </div>
      ) : (
        <button onClick={handleShowConnectWalletModel}>Connect wallet</button>
      )}

      <div className="staking">
        <div className="staking-row">
          <div>total amount: </div>
          <div>100000</div>
        </div>
        <div className="staking-row">
          <div>your amount: </div>
          <div>100000</div>
        </div>
        <div className="staking-row">
          <div>reward: </div>
          <div>100000</div>
        </div>
        <div className="staking-row">
          <div>withdraw date: </div>
          <div>12/12/2022</div>
        </div>
        <div className="staking-row">
          <button>Deposit</button>
          <button>withdraw</button>
        </div>
      </div>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: grid;
  place-items: center;

  .staking {
    &-row {
      display: flex;
      justify-content: space-between;
      column-gap: 2rem;
    }
  }
`
