import { useEffect, useRef } from 'react'
import { useAppDispatch } from 'state'
import useAccount from './useAccount'
import { fetchStakingData } from 'state/staking/actions'
import { getStakingReboundSelector, getStakingSelector } from 'state/staking/reducer'
import { useSelector } from 'react-redux'

const useFetchStaking = () => {
  const isFirstRender = useRef(true)
  const dispatch = useAppDispatch()
  const account = useAccount()

  const stakingData = useSelector(getStakingSelector)
  const rebound = useSelector(getStakingReboundSelector)

  useEffect(() => {
    dispatch(fetchStakingData(account))
  }, [account])
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (rebound) dispatch(fetchStakingData(account))
  }, [account, rebound])

  return stakingData
}

export default useFetchStaking
