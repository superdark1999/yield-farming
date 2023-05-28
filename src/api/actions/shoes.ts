import API from 'api'
import config from 'api/config'

const getShoes = async (params) => {
  const response = await API({
    url: `${config.API.SHOES_SERVICE}`,
    params,
    method: 'GET',
  })
  return response
}

const getShoeById = async (id) => {
  const response = await API({
    url: `${config.API.SHOES_SERVICE}/${id}`,
    method: 'GET',
  })
  return response
}

const getShoeByTokenId = async (tokenId) => {
  const response = await API({
    url: `${config.API.SHOES_SERVICE}/tokenId/${tokenId}`,
    method: 'GET',
    // params: {
    //   tokenId,
    // },
  })
  return response?.data
}
const getShoeTransactions = async (params = {}) => {
  const response = await API({
    url: `${config.API.TRANSACTION_SERVICE}/public`,
    params,
    method: 'GET',
  })
  return response
}

const mintBoxFromShoe = async (data) => {
  const response = await API({
    url: `${config.API.SHOES_SERVICE}/request-mint-box`,
    data,
    method: 'POST',
  })
  return response
}

const ShoesAPI = {
  getShoes,
  getShoeByTokenId,
  getShoeById,
  getShoeTransactions,
  mintBoxFromShoe,
}

export default ShoesAPI
