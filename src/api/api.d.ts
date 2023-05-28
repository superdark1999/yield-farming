import { Method, CancelTokenSource } from 'axios'
import { AnyObject } from '../constants/types'

export type ErrorObjectType = {
  property: string
  invalidValue: string
  message: string
}

export interface DataProperty {
  url: string
  params?: AnyObject | string | undefined
  method?: Method
  headers?: AnyObject
  data?: AnyObject | string
  cancelTokenSource?: CancelTokenSource
  [key: string]: any
}

export type APIFunction = (params: DataProperty) => any

export interface IConfig {
  API: {
    USER_SERVICE: string
    CIVILIAN_SERVICE: string
    SHOES_SERVICE: string
    BOXES_SERVICE: string
    MARKET_SERVICE: string
    TRANSACTION_SERVICE: string
    SETTINGS_SERVICE: string
    LISTEN_SERVICE: string
  }
}
