import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

const LoadingFullScreen = (props) => {
  return (
    <LoadingMain className="loader-container" {...props}>
      Loading
    </LoadingMain>
  )
}

const LoadingMain = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

  font-size: 100px;
`

export default LoadingFullScreen
