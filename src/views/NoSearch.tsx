import React from 'react'
import styled from 'styled-components'

function NoSearch(props) {
  return (
    <NoSearchStyled>
      <img src="./images/detail/no-item.png" alt="" />
    </NoSearchStyled>
  )
}

const NoSearchStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  @media (max-width: 500px) {
    padding-top: 0px;
    img {
      width: 100%;
    }
  }
`
export default NoSearch
