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
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isLoading ? 'lightgray' : '#0e8170',
        color: 'white',
        borderRadius: '8px',
        padding: '4px',
        marginRight: '10px',
        cursor: 'pointer',
      }}
    >
      {isLoading ? 'Loading' : title}
    </button>
  )
}

export default function Home() {
  const [amount, setAmount] = useState('0')
  const { totalAmount, myStakeAmount, reward, withdrawDate } = useFetchStaking()
  // console.log('withdrawDate: ', withdrawDate)
  const isAllowance = useSelector(getIsAllowanceSelector)
  const { onStake, onClaim, onWithdraw, isLoading: actionLoading } = useStake()

  const { approve, isLoading: isApproveLoading } = useApproveCallbackCustom(getFaucetAddress(), getStakingAddress())

  return (
    <HomeStyled>
      <div className="staking">
        <div className="staking-row">
          <div>Total amount: </div>
          <div>{formatBalance(totalAmount)}</div>
        </div>
        <div className="staking-row">
          <div>Your amount: </div>
          <div>{formatBalance(myStakeAmount)}</div>
        </div>
        <div className="staking-row">
          <div>Estimate reward: </div>
          <div>{(+utils.formatEther(reward)).toFixed(6)}</div>
        </div>
        <div className="staking-row">
          <div>Withdraw date: </div>
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
          <div>Apy</div>
          <div>{apy[0]}</div>
        </div>
        <div className="staking-input">
          <InputStyled value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="staking-row-approve">
          {isAllowance ? (
            <CustomButton title="Deposit" isLoading={actionLoading} handleClick={() => onStake(amount)} />
          ) : (
            <CustomButton title="Approve" isLoading={isApproveLoading} handleClick={approve} />
          )}
        </div>
        <div style={{ margin: '10px 0' }}>
          <CustomButton title="Withdraw" isLoading={actionLoading} handleClick={() => onWithdraw()} />
          <CustomButton title="Claim" isLoading={actionLoading} handleClick={() => onClaim()} />
        </div>
      </div>
      <div>
        <img src="./images/home/piggy.webp" alt="" width={300} height={300} />
      </div>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  // display: grid;
  place-items: center;
  margin-top: 100px;
  gap: 70px;

  .staking {
    width: 600px;
    font-size: 16px;
    border: 1px solid;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 10px 10px rgb(143, 188, 143, 0.5);

    &-row {
      display: flex;
      justify-content: space-between;
      column-gap: 2rem;

      &-approve {
        margin-top: 10px;
        display: flex;
        justify-content: center;
      }
    }

    &-input {
      display: flex;
      justify-content: center;
    }
  }
`

const InputStyled = styled.input`
  border-radius: 8px;
  padding: 0 5px;
  margin-top: 5px;
  width: 70%;
`
