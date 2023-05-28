import API from 'api'
import config from 'api/config'

const getBuyBoxEvent = async (params = {}) => {
  const response = await API({
    url: `${config.API.LISTEN_SERVICE}/buy-box`,
    params,
    method: 'GET',
  })
  return response
}

const getOpenINOBoxEvent = async (params = {}) => {
  const response = await API({
    url: `${config.API.LISTEN_SERVICE}/open-ino-box`,
    params,
    method: 'GET',
  })
  return response
}

const getOpenMintedBoxEvent = async (params = {}) => {
  const response = await API({
    url: `${config.API.LISTEN_SERVICE}/open-minted-box`,
    params,
    method: 'GET',
  })
  return response
}

const getMintedBoxFromShoeEvent = async (params = {}) => {
  const response = await API({
    url: `${config.API.LISTEN_SERVICE}/mint-box-from-shoes`,
    params,
    method: 'GET',
  })
  return response
}

const ListenTransactionsAPI = {
  getBuyBoxEvent,
  getOpenINOBoxEvent,
  getOpenMintedBoxEvent,
  getMintedBoxFromShoeEvent,
}

export default ListenTransactionsAPI
