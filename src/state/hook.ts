import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { fetchPrices } from './price'
import { fetchUserTokenData } from './user/actions'
import { getUserLoadedSelector, getUserReboundSelector, setUserState } from './user/reducer'

export const useFetchUser = (account: string) => {
  const isFirstRender = useRef(true)
  const dispatch = useAppDispatch()
  const rebound = useSelector(getUserReboundSelector)
  const loaded = useSelector(getUserLoadedSelector)
  useEffect(() => {
    if (account) {
      dispatch(fetchUserTokenData(account))
      dispatch(setUserState({ rebound: false }))
    }
  }, [account])
  useEffect(() => {
    if (rebound && !isFirstRender.current) {
      if (account) {
        dispatch(fetchUserTokenData(account))
        dispatch(setUserState({ rebound: false }))
      }
    } else isFirstRender.current = false
  }, [account, rebound])
  return { loaded }
}

export const useFetchPrice = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPrices())
  }, [])
}
