import { SVGAttributes } from 'react'
import { SpaceProps } from 'styled-system'

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: any
  spin?: boolean
}
