import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

const LoadingFullScreen = (props) => {
  return (
    <LoadingMain className="loader-container" {...props}>
      <div className="loading__style">
        <img src="./images/loading/img-loading.png" alt="" />
      </div>
      {/* <div className="bg__loading"></div> */}

      <div className="bg__loading">
        <img src="./images/loading/bg-loading.svg" alt="" />
      </div>
    </LoadingMain>
  )
}

const LoadingMain = styled.div`
  width: 100vw;
  height: 100vh;
  background: #001a1a;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  &:before {
    content: '';
    background: #001a1a;
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    transform: translate(0%, 100%);
    animation: loadingImg 4s ease;
  }
  .bg__loading {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  @keyframes loadingImg {
    from {
      /* opacity: 1; */
      transform: translate(0%, 0%);
      /* top: 0%; */
      /* transform: scale(1); */
    }
    to {
      /* opacity: 0; */
      transform: translate(0%, -100%);
      /* transform: scale(0); */
      /* top: -100%; */
    }
  }

  .loading__style {
    display: flex;
    justify-content: center;
    align-items: end;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 500px;
      animation: scaleShoes 1s infinite alternate linear;
      margin: 0 auto;
      padding-bottom: 80px;
      @media (max-width: 1024px) {
        width: 450px;
        padding-bottom: 60px;
      }
      @media (max-width: 500px) {
        width: 300px;
        padding-bottom: 40px;
      }
    }

    @keyframes scaleShoes {
      from {
        transform: scale(1);
        opacity: 1;
      }
      to {
        transform: scale(0.8);
        opacity: 0.8;
      }
    }

    /* .loading-animate {
    font-family: 'Oxanium', cursive;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      width: 550px;
      margin: 0 auto;
    }
    @media only screen and (max-width: 600px) {
      font-size: 1rem;
      width: 450px;
    }
  } */
  }
`

export default LoadingFullScreen
