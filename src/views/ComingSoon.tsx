import React from 'react'
import styled from 'styled-components'

function ComingSoon(props) {
  return (
    <ComingSoonStyled>
      <img src="./images/detail/coming-soon.svg" alt="" />
    </ComingSoonStyled>
  )
}

const ComingSoonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    img {
      width: 80%;
      margin: 0 auto;
    }
  }
`
export default ComingSoon
