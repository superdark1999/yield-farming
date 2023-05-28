import API from 'api'
import config from 'api/config'

const getBoxes = async (params) => {
  const response = await API({
    url: `${config.API.BOXES_SERVICE}`,
    params,
    method: 'GET',
  })
  return response
}

const getBoxById = async (id) => {
  const response = await API({
    url: `${config.API.BOXES_SERVICE}/${id}`,
    method: 'GET',
  })
  return response
}

const getBoxByTokenId = async (tokenId) => {
  const response = await API({
    url: `${config.API.BOXES_SERVICE}`,
    method: 'GET',
    params: {
      tokenId,
    },
  })
  return response?.data?.results?.[0]
}

const BoxesAPI = {
  getBoxes,
  getBoxById,
  getBoxByTokenId,
}

export default BoxesAPI
