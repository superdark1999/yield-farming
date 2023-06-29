import styled, { keyframes } from 'styled-components'

const LoadingFullScreen = (props) => {
  return (
    <LoadingMain className="loader-container" {...props}>
      <Loader />
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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-bottom: 16px solid blue;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 60px);
`

export default LoadingFullScreen
