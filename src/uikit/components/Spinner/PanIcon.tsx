import React from 'react'
import Svg from '../Svg/Svg'
import { SvgProps } from '../Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return <Svg viewBox="0 0 256 256" {...props}></Svg>
}

export default Icon
