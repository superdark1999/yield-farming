import styled from 'styled-components'
import { space } from 'styled-system'
import { CardProps } from './types'

interface StyledCardProps extends CardProps {
  theme: any
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess
  }

  if (isActive) {
    return theme.card.boxShadowActive
  }

  return theme.card.boxShadow
}

const StyledCard = styled.div<StyledCardProps>`
  background: linear-gradient(45deg, rgb(35 35 35) 30%, rgb(45 45 45) 100%);
  box-shadow: 0px 0px 11px 0px rgb(16 16 16 / 57%);
  // border-radius: 24px;
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? 'textDisabled' : 'text']};
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 436px;
  margin: 0 auto 60px;
  ${space}
`

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
}

export default StyledCard
