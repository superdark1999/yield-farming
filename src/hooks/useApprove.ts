import { MaxUint256 } from '@ethersproject/constants'
import { notification } from 'antd'
import { useCallback, useState } from 'react'
import { setUserState } from 'state/user/reducer'
import { calculateGasMargin } from 'utils'
import { useAppDispatch } from '../state/index'
import { useTokenContract } from './useContract'

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveCallbackCustom(token?: any, addressNeedApprove?: string, callback?: any) {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const tokenContract = useTokenContract(token)
  const approve = useCallback(async () => {
    try {
      setIsLoading(true)
      const estimatedGas = await tokenContract.estimateGas.approve(addressNeedApprove, MaxUint256).catch(() => {
        return tokenContract.estimateGas.approve(addressNeedApprove, MaxUint256)
      })

      console.log('estimatedGas', estimatedGas)
      const tx = await tokenContract.approve(addressNeedApprove, MaxUint256, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      await tx.wait()
      dispatch(setUserState({ rebound: true }))
      notification.success({
        message: 'Success',
        description: 'Approve successfully',
      })
      callback?.()
    } catch (error) {
      console.debug('Failed to approve token', error)
      notification.error({
        message: 'Failed',
        description: 'Failed to approve token',
      })
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [tokenContract, addressNeedApprove])

  return { approve, isLoading }
}
