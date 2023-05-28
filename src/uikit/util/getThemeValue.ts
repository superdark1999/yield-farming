import get from 'lodash/get'

const getThemeValue =
  (path: string, fallback?: string | number) =>
  (theme: any): string =>
    get(theme, path, fallback)

export default getThemeValue
