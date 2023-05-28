import API from 'api'
import config from 'api/config'
import { stringify } from 'qs'

const getListingItems = async (params) => {
  const response = await API({
    url: `${config.API.MARKET_SERVICE}/listing-items`,
    params,
    method: 'GET',
    paramsSerializer: (param) => {
      return stringify(param)
    },
  })
  return response
}

const ListingItemAPI = {
  getListingItems,
}

export default ListingItemAPI
