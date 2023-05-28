import getThemeValue from './getThemeValue'

const getColor = (color: string, theme: any): string => {
  return getThemeValue(`colors.${color}`, color)(theme)
}

export default getColor
