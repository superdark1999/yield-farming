import { useWeb3React } from '@web3-react/core'
import LoadingFullScreen from 'components/atoms/LoadingFullScreen'
import useAccount from 'hooks/useAccount'
import useWeb3ReactManager from 'hooks/useWeb3ReactManager'
import React, { useEffect } from 'react'
import Routes from 'routes'
import { useFetchPrice, useFetchUser } from 'state/hook'
import './index.scss'

const App: React.FC = (props) => {
  const { chainId } = useWeb3React()
  const account = useAccount()

  useWeb3ReactManager()

  useEffect(() => {
    if (chainId) {
      window.localStorage.setItem('chainId', chainId.toString())
    }

    if (account) {
      window.localStorage.setItem('account', account)
    }
  }, [chainId, account])

  const { loaded } = useFetchUser(account)
  useFetchPrice()

  return (
    <>
      {!loaded && <LoadingFullScreen />}
      <Routes />
    </>
  )
}

export default React.memo(App)
