import { MaxUint256 } from '@ethersproject/constants'
import { useCallback } from 'react'
import { calculateGasMargin } from 'utils'
import { useTokenContract } from './useContract'
import { useAppDispatch } from '../state/index'
import { useSelector } from 'react-redux'
import { getUserTokenDataSelector, setUserState } from 'state/user/reducer'
import { notification } from 'antd'

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveCallbackCustom(tokenId, token?: any, addressNeedApprove?: string, callback?: any) {
  const tokenContract = useTokenContract(token)
  const dispatch = useAppDispatch()
  const userToken = useSelector(getUserTokenDataSelector)
  const approve = useCallback(async () => {
    try {
      const estimatedGas = await tokenContract.estimateGas.approve(addressNeedApprove, MaxUint256).catch(() => {
        return tokenContract.estimateGas.approve(addressNeedApprove, MaxUint256)
      })
      const tx = await tokenContract.approve(addressNeedApprove, MaxUint256, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      await tx.wait()
      notification.success({
        message: 'Success',
        description: 'Approve successfully',
      })
      callback?.()
    } catch (error) {
      console.debug('Failed to approve token', error)
      notification.error({
        message: 'Failed',
        description: 'Failed to approve nft',
      })
      throw error
    } finally {
    }
  }, [tokenContract, addressNeedApprove, userToken])

  return [approve]
}
