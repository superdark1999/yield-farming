export const APPLICATION_SLICE_NAME = 'application'

interface ACTION {
  [key: string]: string
}
export const APPLICATION_ACTION: ACTION = {
  GET_SETTINGS: `GET_SETTINGS`,
}
Object.keys(APPLICATION_ACTION).forEach((key) => {
  APPLICATION_ACTION[key] = `${APPLICATION_SLICE_NAME}/${APPLICATION_ACTION[key]}`
})

export const ITEMS_PER_PAGE = 15
