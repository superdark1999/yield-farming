import axios from 'axios'
import { stringify, parse } from 'query-string'

import { APIFunction } from './api.d'
import './config'
import './interceptors'

export const API_ERROR_MESSAGE_GENERAL = 'Oops. Something wrong happened'
export const ERROR_MESSAGE_NO_NETWORK = 'OFFLINE_MESSAGE'

let isOnline: boolean = navigator.onLine
window.addEventListener('offline', () => {
  isOnline = false
})

window.addEventListener('online', () => {
  isOnline = true
})

const API: APIFunction = async ({
  url,
  params = '',
  method = 'get',
  headers = {},
  data = '',
  cancelTokenSource,
  ...props
}) => {
  try {
    const response = await axios({
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
      ...props,
      params,
      data,
      cancelToken: cancelTokenSource?.token,
    })

    return response && response.data
  } catch (error) {
    if (isOnline) {
      throw error
    } else {
      const offlineResponse = {
        response: {
          data: {
            error: {
              message: ERROR_MESSAGE_NO_NETWORK,
            },
          },
        },
      }

      throw offlineResponse
    }
  }
}

export default API
