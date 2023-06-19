import { utils } from 'ethers'
import { useApproveCallbackCustom } from 'hooks/useApprove'
import useFetchStaking from 'hooks/useFetchStaking'
import useStake from 'hooks/useStaking'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getIsAllowanceSelector } from 'state/user/reducer'
import styled from 'styled-components'
import { getFaucetAddress, getStakingAddress } from 'utils/addressHelpers'
import { formatBalance } from 'utils/formatNumber'

const apy = [200, 250, 300]

const CustomButton = ({ isLoading, handleClick, title }) => {
  return <button onClick={handleClick}>{isLoading ? 'Loading' : title}</button>
}

export default function Home() {
  const [amount, setAmount] = useState('0')
  const { totalAmount, myStakeAmount, reward, withdrawDate } = useFetchStaking()
  console.log('withdrawDate: ', withdrawDate)
  const isAllowance = useSelector(getIsAllowanceSelector)
  const { onStake, onClaim, onWithdraw, isLoading: actionLoading } = useStake()

  const { approve, isLoading: isApproveLoading } = useApproveCallbackCustom(getFaucetAddress(), getStakingAddress())

  return (
    <HomeStyled>
      <div className="staking">
        <div className="staking-row">
          <div>total amount: </div>
          <div>{formatBalance(totalAmount)}</div>
        </div>
        <div className="staking-row">
          <div>your amount: </div>
          <div>{formatBalance(myStakeAmount)}</div>
        </div>
        <div className="staking-row">
          <div>Estimate reward: </div>
          <div>{(+utils.formatEther(reward)).toFixed(6)}</div>
        </div>
        <div className="staking-row">
          <div>withdraw date: </div>
          <div>
            {new Date(withdrawDate).toLocaleDateString('en-VN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
            })}
          </div>
        </div>
        <div className="staking-row">
          <div>apy</div>
          <div>{apy[0]}</div>
        </div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        <div className="staking-row">
          {isAllowance ? (
            <CustomButton title="Deposit" isLoading={actionLoading} handleClick={() => onStake(amount)} />
          ) : (
            <CustomButton title="Approve" isLoading={isApproveLoading} handleClick={approve} />
          )}
        </div>
        <div>
          <CustomButton title="Withdraw" isLoading={actionLoading} handleClick={() => onWithdraw()} />
          <CustomButton title="Claim" isLoading={actionLoading} handleClick={() => onClaim()} />
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
