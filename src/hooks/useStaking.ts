import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { useCallback, useState } from 'react'
import { calculateGasMargin } from 'utils'
import { useStakingContract } from './useContract'

const useStake = (poolId = 0) => {
  const [isLoading, setIsLoading] = useState(false)
  const { account } = useWeb3React()
  const stakingContract = useStakingContract()

  const handleStake = useCallback(
    async (amount: string) => {
      try {
        setIsLoading(true)
        const value = ethers.utils.parseEther(amount).toString()
        console.log(poolId)
        const estimatedGas = await stakingContract.estimateGas
          .deposit(poolId, value)

          .catch(() => {
            return stakingContract.estimateGas.deposit(poolId, value)
          })
        const txHash = await stakingContract.deposit(poolId, value, {
          gasLimit: calculateGasMargin(estimatedGas),
        })

        await txHash.wait()
      } catch (error) {
        console.log('error handleStake', error)
      } finally {
        setIsLoading(false)
      }
    },
    [account, stakingContract, poolId],
  )

  const handleClaim = useCallback(async () => {
    try {
      setIsLoading(true)

      const txHash = await stakingContract.claim(poolId)
      await txHash.wait()
    } catch (error) {
      console.log('error handleClaim', error)
    } finally {
      setIsLoading(false)
    }
  }, [account, stakingContract])

  const handleWithdraw = useCallback(async () => {
    try {
      setIsLoading(true)

      const txHash = await stakingContract.withdraw(poolId)
      await txHash.wait()
    } catch (error) {
      console.log('error handleWithdraw', error)
    } finally {
      setIsLoading(false)
    }
  }, [account, stakingContract, poolId])

  return { onStake: handleStake, onClaim: handleClaim, onWithdraw: handleWithdraw, isLoading }
}

export default useStake
