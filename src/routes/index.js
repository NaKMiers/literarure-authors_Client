import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

const routes = [
   {
      path: '/',
      exact: true,
      component: () => <HomePage />,
   },
   {
      path: '/',
      exact: false,
      component: () => <NotFoundPage />,
   },
]

const renderRoutes = () =>
   routes.map(r => <Route key={r.path} path={r.path} exact={r.exact} component={r.component} />)

export default renderRoutes()
