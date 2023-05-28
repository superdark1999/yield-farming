import { ChainId } from 'constants/enums'
import random from 'lodash/random'
import { RPC_URLS } from '../constants'

// Array of available nodes to connect to

const getNodeUrl = (chainId?: number) => {
  try {
    const randomIndex = random(0, RPC_URLS[chainId].length - 1)
    const nodeUrl = RPC_URLS[chainId][randomIndex]
    return nodeUrl
  } catch (error) {
    return RPC_URLS[ChainId.BSC][0]
  }
}

export default getNodeUrl
