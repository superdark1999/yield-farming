import { ethers } from 'ethers'
import { getMulticallContract } from './contractHelpers'
import { getChainId } from './web3React'

export interface Call {
  address: string // Address of the contract
  name: string // Function name on the contract (example: balanceOf)
  params?: any[] // Function params
}

interface MulticallOptions {
  requireSuccess?: boolean
}

export type MultiCallResponse<T> = T | null

// const multicall = async <T = any>(abi: any[], calls: Call[]): Promise<T> => {
//   try {
//     const chainId = getChainId()
//     const multi = getMulticallContract(null, chainId)
//     const itf = new ethers.utils.Interface(abi)

//     const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
//     const { returnData } = await multi.aggregate(calldata)

//     const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call))

//     return res
//   } catch (error) {
//     throw new Error('Error')
//   }
// }

/**
 * Multicall V2 uses the new "tryAggregate" function. It is different in 2 ways
 *
 * 1. If "requireSuccess" is false multicall will not bail out if one of the calls fails
 * 2. The return includes a boolean whether the call was successful e.g. [wasSuccessful, callResult]
 */
const multicall = async <T = any>(
  abi: any[],
  calls: Call[],
  options: MulticallOptions = { requireSuccess: false },
): Promise<MultiCallResponse<T>> => {
  const { requireSuccess } = options
  const multi = getMulticallContract()
  const itf = new ethers.utils.Interface(abi)

  const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  const returnData = await multi.tryAggregate(requireSuccess, calldata)
  const res = returnData.map((call, i) => {
    const [result, data] = call
    const test = result ? itf.decodeFunctionResult(calls[i].name, data) : null
    return test
  })

  return res
}

export default multicall
