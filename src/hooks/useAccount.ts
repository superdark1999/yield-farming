import { useWeb3React } from '@web3-react/core'
import { useActiveWeb3React } from 'hooks'
import { useEffect } from 'react'
import { useAppDispatch } from 'state'

const useAccount = () => {
  const { account } = useActiveWeb3React()
  const localAccount = localStorage.getItem('account')
  const dispatch = useAppDispatch()

  return account || localAccount
}
export default useAccount
