import GlobalModal from 'components/molecules/GlobalModal/GlobalModal'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const MarketplaceLayout: React.FC<Props> = ({ children }) => {
  const location = useLocation()
  useEffect(() => {
    document.getElementById('root').scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }, [location])

  return (
    <FullScreenStyled>
      <GlobalModal />
      <div className="content">{children}</div>
    </FullScreenStyled>
  )
}
const FullScreenStyled = styled.div`
  width: 100%;
  height: 100%;
  .content {
    padding-top: 80px;
    height: 100%;
  }
  .marketPage {
    /* padding-top: 33px; */
    height: 100%;
    .ant-row {
      position: relative;
      .ant-col {
        position: unset;
      }
    }
  }
`

export default MarketplaceLayout
