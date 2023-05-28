import API from 'api'
import config from 'api/config'

const getUser = async (params) => {
  const response = await API({
    url: `${config.API.USER_SERVICE}`,
    params,
    method: 'GET',
  })
  return response
}

const UsersAPI = {
  getUser,
}

export default UsersAPI
