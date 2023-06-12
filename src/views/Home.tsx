import { useApproveCallbackCustom } from 'hooks/useApprove'
import useFetchStaking from 'hooks/useStaking'
import useStake from 'hooks/useStaking copy'
import { useSelector } from 'react-redux'
import { getIsAllowanceSelector } from 'state/user/reducer'
import styled from 'styled-components'
import { getFaucetAddress, getStakingAddress } from 'utils/addressHelpers'

export default function Home() {
  const { totalAmount, myStakeAmount, reward, withdrawDate } = useFetchStaking()
  const isAllowance = useSelector(getIsAllowanceSelector)
  const { onStake, onClaim, onWithdraw } = useStake()

  console.log('isAllowance: ', isAllowance)
  const { approve, isLoading } = useApproveCallbackCustom(getFaucetAddress(), getStakingAddress())

  return (
    <HomeStyled>
      <div className="staking">
        <div className="staking-row">
          <div>total amount: </div>
          <div>{totalAmount}</div>
        </div>
        <div className="staking-row">
          <div>your amount: </div>
          <div>{myStakeAmount}</div>
        </div>
        <div className="staking-row">
          <div>Estimate reward: </div>
          <div>{reward}</div>
        </div>
        <div className="staking-row">
          <div>withdraw date: </div>
          <div>{withdrawDate}</div>
        </div>
        <div className="staking-row">
          {isAllowance ? (
            <button>Deposit</button>
          ) : (
            <button onClick={approve}>{isLoading ? 'Loading' : 'Approve'}</button>
          )}
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
