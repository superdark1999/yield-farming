import React from 'react'
import styled from 'styled-components'
import { PancakeRoundIcon } from '../../../components/Svg'
import Text from '../../../components/Text/Text'
import Skeleton from '../../../components/Skeleton/Skeleton'

interface Props {
  cakePriceUsd?: number
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;

  img {
    transition: transform 0.3s;
    margin-right: 7px;
  }

  :hover {
    img {
      transform: scale(1.2);
    }
  }
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return (
    <PriceLink href="/" target="_blank">
      <img src="/images/logo-sm.png" width="24px" />
      <Text color="textSubtle" bold>{` $${(cakePriceUsd && cakePriceUsd.toFixed(3)) || '0.000'}`}</Text>
    </PriceLink>
  )
}

export default React.memo(CakePrice)
