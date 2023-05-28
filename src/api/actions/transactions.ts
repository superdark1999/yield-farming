import API from 'api'
import config from 'api/config'

const getNftTransactions = async (params = {}) => {
  const response = await API({
    url: `${config.API.TRANSACTION_SERVICE}/public`,
    params,
    method: 'GET',
  })
  return response
}

const TransactionsAPI = {
  getNftTransactions,
}

export default TransactionsAPI
