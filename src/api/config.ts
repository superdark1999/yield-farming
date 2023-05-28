import { IConfig } from './api.d'

const REACT_APP_API_URL = process.env.REACT_APP_RESTFUL_ENDPOINT || 'http://localhost:8001'

const config: IConfig = {
  API: {
    USER_SERVICE: '/users',
    CIVILIAN_SERVICE: '/civilians',
    SHOES_SERVICE: '/shoes',
    BOXES_SERVICE: '/boxes',
    MARKET_SERVICE: '/market',
    TRANSACTION_SERVICE: '/transactions',
    SETTINGS_SERVICE: '/settings',
    LISTEN_SERVICE: '/listen-transaction',
  },
}

Object.keys(config.API).forEach((item) => {
  ;(config.API as any)[item] = `${REACT_APP_API_URL}${config.API[item]}`
})

export default config
