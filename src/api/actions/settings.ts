import API from 'api'
import config from 'api/config'

const getSettings = async (params = {}) => {
  const response = await API({
    url: `${config.API.SETTINGS_SERVICE}`,
    params,
    method: 'GET',
  })
  return response
}

const SettingsAPI = {
  getSettings,
}

export default SettingsAPI
