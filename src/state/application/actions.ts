import { createAsyncThunk } from '@reduxjs/toolkit'
import SettingsAPI from 'api/actions/settings'
import { APPLICATION_ACTION } from './constants'

const { GET_SETTINGS } = APPLICATION_ACTION

export const fetchSettings = createAsyncThunk(GET_SETTINGS, async (_) => {
  try {
    const response = await SettingsAPI.getSettings()

    return {
      settings: {
        ...response.data[0],
      },
    }
  } catch (e) {
    console.log('errsdfor')
    return {
      settings: {},
    }
  }
})
