import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 261.2 252.35" {...props}>
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '.cls-1,.cls-5{fill:#232323;}.cls-1,.cls-3,.cls-4{stroke:#ffffff;}.cls-1,.cls-3,.cls-4,.cls-5{stroke-miterlimit:10;}.cls-1{stroke-width:20px;}.cls-2,.cls-4{fill:#ffffff;}.cls-3{fill:none;stroke-width:30px;}.cls-4{stroke-width:8px;}.cls-5{stroke:#58595b;}',
          }}
        />
      </defs>
      <circle className="cls-1" cx="139.15" cy="69.4" r="64.4" />
      <circle className="cls-2" cx="71.55" cy="105.66" r="71.55" />
      <line className="cls-3" x1="102.77" y1="231.33" x2="239.91" y2="117.48" />
      <rect
        className="cls-4"
        x="224.55"
        y="85.24"
        width="16.32"
        height="48.66"
        rx="5.7"
        transform="translate(377.02 -103.35) rotate(98.92)"
      />
      <rect
        className="cls-4"
        x="238.02"
        y="103.72"
        width="16.32"
        height="48.66"
        rx="5.7"
        transform="translate(22.82 -36.61) rotate(8.92)"
      />
      <rect
        className="cls-4"
        x="104.11"
        y={213}
        width="16.32"
        height="48.66"
        rx="5.7"
        transform="translate(-139.59 311.46) rotate(-81.08)"
      />
      <rect
        className="cls-4"
        x="90.65"
        y="194.52"
        width="16.32"
        height="48.66"
        rx="5.7"
        transform="translate(162.5 450.37) rotate(-171.08)"
      />
      <rect className="cls-5" x="37.71" y="71.81" width="67.7" height="67.7" />
    </Svg>
  )
}

export default Icon
