import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import { IRoutes } from './Routes.d'
import { RoutesString } from './routesString'

const MarketplaceLayout = lazy(() => import('layouts/MarketplaceLayout/MarketplaceLayout'))
const Home = lazy(() => import('views/Home'))
const MemberGuard = lazy(() => import('guards/MemberGuard'))

export const routesConfig: IRoutes[] = [
  {
    layout: MarketplaceLayout,
    path: RoutesString.MemberLayout,
    routes: [
      {
        page: Home,
        path: RoutesString.Home,
        exact: true,
      },
    ],
  },
  // {
  //   page: PageMarket,
  //   path: '*',
  // },
]
