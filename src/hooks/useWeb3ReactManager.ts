import { useWeb3React } from '@web3-react/core'
import { network } from 'connectors'
import { useInactiveListener } from 'hooks'
import { useEffect } from 'react'
import { useAppDispatch } from 'state'
import { setUserState } from 'state/user/reducer'
import { NetworkContextName } from '../constants'
import useAccount from './useAccount'
import useEagerConnect from './useEagerConnect'

const useWeb3ReactManager = () => {
  const { active } = useWeb3React()
  const account = useAccount()
  const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React(NetworkContextName)
  const dispatch = useAppDispatch()
  // try to eagerly connect to an injected provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd
  useEffect(() => {
    if (triedEager && !networkActive && !networkError && !active) {
      activateNetwork(network)
    }
  }, [triedEager, networkActive, networkError, activateNetwork, active])

  useEffect(() => {
    if (!account) {
      setTimeout(() => {
        dispatch(
          setUserState({
            loaded: true,
          }),
        )
      }, 3000)
    }
  }, [account])

  const accountChangedHandler = (newAccount) => {
    dispatch(
      setUserState({
        rebound: true,
      }),
    )
  }

  useEffect(() => {
    window?.ethereum?.on('accountsChanged', accountChangedHandler)
  }, [])
  // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
  useInactiveListener(!triedEager)
}

export default useWeb3ReactManager
