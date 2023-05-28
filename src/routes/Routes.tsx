import React, { Fragment, Suspense } from 'react'
import { Switch, Route } from 'react-router'
import { routesConfig } from './routesConfig'
import { IRoutes } from './Routes.d'

const renderRoutes = (routes: IRoutes[]) => {
  return (
    <Switch>
      {routes &&
        routes.map((route: IRoutes, idx: number) => {
          const Layout = route.layout || Fragment
          const Guard = route.guard || Fragment
          const Component = route?.page || Fragment
          return (
            <Route
              key={`routes-${idx}`}
              path={route.path}
              exact={route.exact}
              render={(props: any) => (
                <Guard>
                  <Layout>
                    {route.routes && route.routes.length > 0 ? renderRoutes(route.routes) : <Component {...props} />}
                  </Layout>
                </Guard>
              )}
            />
          )
        })}
    </Switch>
  )
}

function Routes() {
  return (
    <Route
      render={() => (
        <Suspense fallback={<div />}>
          <Switch>{renderRoutes(routesConfig)}</Switch>
        </Suspense>
      )}
    />
  )
}

export default Routes
