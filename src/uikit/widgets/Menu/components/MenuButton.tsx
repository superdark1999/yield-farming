import styled from 'styled-components'
import Button from '../../../components/Button/Button'

const MenuButton = styled(Button)`
  // color: ${({ theme }) => theme.colors.text};
  color: #2b2c3a;
  padding: 0 8px;
  border-radius: 8px;
`

MenuButton.defaultProps = {
  variant: 'text',
  size: 'sm',
}

export default MenuButton
