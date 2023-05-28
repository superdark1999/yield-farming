import React, { useState } from 'react'
import styled from 'styled-components'

interface IconProps {
  chainId: number
  onChainChange: (chainId: number) => void
}

const BSCIcon: React.FC<IconProps> = ({ onChainChange, chainId }) => {
  const [dropdownOpen, setOpen] = useState(false)

  const getNetworkName = () => {
    switch (chainId) {
      case 97:
        return 'BSC testnet'
      case 80001:
        return 'Polygon testnet'
      default:
        return 'BSC testnet'
    }
  }

  const getIcon = () => {
    switch (chainId) {
      case 56:
      case 97:
        return 'https://luckyswap.finance/images/binance.svg'
      case 137:
      case 80001:
        return 'https://app.1inch.io/assets/images/network-logos/polygon.svg'
      default:
        return 'https://luckyswap.finance/images/binance.svg'
    }
  }

  const toggle = () => setOpen(!dropdownOpen)

  const clickHandler = (chainSelected: number) => {
    onChainChange(chainSelected)
  }

  return <LuckyIconBox></LuckyIconBox>
}

const LuckyIconBox = styled.button`
  box-sizing: border-box;
  position: relative;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin-right: 15px;
  min-width: 64px;
  line-height: 36px;
  padding: 0 16px;
  border-radius: 8px;
  overflow: visible;
  cursor: pointer;
  background: #f4c708;
  color: #2b2e2f;
  font-weight: 600;

  @media (max-width: 768px) {
    display: none;
  }
`

const Dlfex = styled.div`
  display: flex;

  button {
    background-color: none !important;
  }

  p {
    display: flex;
    align-items: center;
    padding: 2px 12px 2px 36px;

    img {
      position: absolute;
      left: 4px;
      height: 34px;
      width: 34px;
    }

    span {
      font-weight: 600;
    }
  }
`

export default BSCIcon
