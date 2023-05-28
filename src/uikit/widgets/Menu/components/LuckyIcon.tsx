import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
interface Props {
  balance?: string
}

const LuckyIcon: React.FC<Props> = ({ balance }) => {
  return (
    <LuckyIconBox>
      <img src="https://luckyswap.finance/images/logo-icon.png" alt="" />
      <p>{balance || '0.00'}</p>
    </LuckyIconBox>
  )
}

const LuckyIconBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-items: center;
  background: linear-gradient(73.28deg, #444444 6.51%, #737373 88.45%);
  border: 1px solid #88888c;
  border-radius: 20px;
  padding: 0 12px 0 40px;
  min-width: 60px;
  margin-right: 15px;
  height: 40px;
  max-width: calc(100% - 20px);

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 40px;
    height: 40px;
    position: absolute;
    left: -4px;
    border-radius: 50%;
    padding: 8px;
  }

  p {
    display: block;
    width: 100%;
    max-width: 100%;
    text-align: center;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    font-weight: 600;
  }
`

export default LuckyIcon
