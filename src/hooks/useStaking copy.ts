import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { useCallback } from 'react'
import { calculateGasMargin } from 'utils'
import { useStakingContract } from './useContract'

const useStake = (poolId = 0) => {
  const { account } = useWeb3React()
  const stakingContract = useStakingContract()

  const handleStake = useCallback(
    async (amount: number) => {
      const value = ethers.utils.parseEther(amount.toString()).toString()
      const estimatedGas = await stakingContract.estimateGas
        .deposit(poolId, value)

        .catch(() => {
          return stakingContract.estimateGas.deposit(poolId, value)
        })
      const txHash = await stakingContract.deposit(poolId, value, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      return txHash
    },
    [account, stakingContract, poolId],
  )

  const handleClaim = useCallback(async () => {
    const txHash = await stakingContract.claim(poolId)
    return txHash
  }, [account, stakingContract])

  const handleWithdraw = useCallback(async () => {
    const txHash = await stakingContract.withdraw(poolId)
    return txHash
  }, [account, stakingContract, poolId])

  return { onStake: handleStake, onClaim: handleClaim, onWithdraw: handleWithdraw }
}

export default useStake
