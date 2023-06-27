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
const ButtonStyled = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #003e3e;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: #005c5c;
  }
`

const CustomButton = ({ isLoading, handleClick, title }) => {
  return (
    <ButtonStyled
      onClick={handleClick}
      // style={{
      //   backgroundColor: isLoading ? 'lightgray' : '#0e8170',
      //   color: 'white',
      //   borderRadius: '8px',
      //   padding: '10px 20px',
      //   marginRight: '10px',
      //   cursor: 'pointer',
      // }}
      className="button"
    >
      {isLoading ? 'Loading' : title}
    </ButtonStyled>
  )
}

export default function Home() {
  const [amount, setAmount] = useState('0')
  const { totalAmount, myStakeAmount, reward, withdrawDate } = useFetchStaking()
  // console.log('withdrawDate: ', withdrawDate)
  const isAllowance = useSelector(getIsAllowanceSelector)
  const { onStake, onClaim, onWithdraw, isLoading: actionLoading } = useStake()

  const { approve, isLoading: isApproveLoading } = useApproveCallbackCustom(getFaucetAddress(), getStakingAddress())

  console.log(+utils.formatEther(totalAmount) > 2000)
  return (
    <HomeStyled>
      <div className="staking">
        <div className="staking-row">
          <div className="title">Total amount: </div>
          <div className="title-value">{formatBalance(totalAmount)}</div>
        </div>
        <div className="staking-row">
          <div className="title">Your amount: </div>
          <div className="title-value">{formatBalance(myStakeAmount)}</div>
        </div>
        <div className="staking-row">
          <div className="title">Estimate reward: </div>
          <div className="title-value">{(+utils.formatEther(reward)).toFixed(6)}</div>
        </div>
        <div className="staking-row">
          <div className="title">Withdraw date: </div>
          <div className="title-value">
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
          <div className="title">Apy</div>
          <div className="title-value">
            {+utils.formatEther(totalAmount) < 2000
              ? apy[0]
              : +utils.formatEther(totalAmount) < 100000
              ? apy[1]
              : apy[2]}
          </div>
        </div>
        <div className="staking-input">
          <InputStyled value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div style={{ margin: '20px 0' }} className="btn-wrap">
          {isAllowance ? (
            <CustomButton title="Deposit" isLoading={actionLoading} handleClick={() => onStake(amount)} />
          ) : (
            <CustomButton title="Approve" isLoading={isApproveLoading} handleClick={approve} />
          )}
          <CustomButton title="Withdraw" isLoading={actionLoading} handleClick={() => onWithdraw()} />
          <CustomButton title="Claim" isLoading={actionLoading} handleClick={() => onClaim()} />
        </div>
      </div>
      <div>
        <img src="/images/home/piggy.webp" alt="" width={300} height={300} />
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

  .title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  .title-value {
    font-size: 18px;
    font-weight: normal;
    color: #666;
  }

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

  .btn-wrap {
    display: flex;
    justify-content: space-around;
  }
`

const InputStyled = styled.input`
  border-radius: 8px;
  padding: 0 5px;
  margin-top: 5px;
  width: 70%;
`
