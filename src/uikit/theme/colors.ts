import { Colors } from './types'

export const baseColors = {
  failure: '#fff',
  primary: '#ffffff',
  primaryBright: '#53DEE9',
  primaryDark: '#0098A1',
  secondary: '#7645D9',
  success: '#31D0AA',
  warning: '#FFB237',
}

export const brandColors = {
  binance: '#F0B90B',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: '#FAF9FA',
  backgroundDisabled: '#203c46',
  backgroundAlt: '#fff',
  contrast: '#191326',
  dropdown: '#F6F6F6',
  invertedContrast: '#ffffff',
  input: '#444444',
  inputSecondary: '#444444',
  tertiary: '#8c8c8c',
  text: '#ffffff',
  bgbtn: '#f5c606',
  textDisabled: 'ffffff',
  textSubtle: '#fff',
  borderColor: '#FFF',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)',
    cardHeader: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
    blue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
    violet: 'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#9A6AFF',
  background: '#100C18',
  backgroundDisabled: '#3c3742',
  backgroundAlt: '#27262c',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  invertedContrast: '#191326',
  input: '#483f5a',
  inputSecondary: '#66578D',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#EAE2FC',
  bgbtn: '#f5c606',
  textDisabled: '#666171',
  textSubtle: '#A28BD4',
  borderColor: '#524B63',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
    cardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
    blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
    violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
  },
}
