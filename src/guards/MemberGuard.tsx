import useAccount from 'hooks/useAccount'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { RoutesString } from 'routes/routesString'

type Props = {
  children?: React.ReactNode
}

const MemberGuard: React.FC<Props> = ({ children }) => {
  const account = useAccount()
  if (!account) return <Redirect to={RoutesString.Home} />
  return <>{children}</>
}

export default MemberGuard
