import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import  { useAuth }  from '../contexts/Authcontext'
import ForgotPasswordPage from '../pages/ForgotPassword'
import Home from '../pages/Home'
import Loginpage from '../pages/Login'
//import NotfoundPage from '../pages/NotfoundPage'
//import Accountpage from '../pages/account'
import Registerpage from '../pages/Register'
import ResetPasswordPage from '../pages/ResetPassword'
//import TestPage from '../pages/TestPage'
//import LinkRedirect from '../component/LinkRedirect/index';

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute exact path='/Login' component={Loginpage} />
          <ProtectedRoute exact path='/Register' component={Registerpage} />
          <ProtectedRoute exact path='/account' component={Accountpage} />
          <ProtectedRoute
            exact
            path='/ForgotPasswordPage'
            component={ForgotPasswordPage}
          />
          <ProtectedRoute
            exact
            path='/reset'
            component={ResetPasswordPage}
          />
          <Route path = "/:shortCode">
            <LinkRedirect />
          </Route>
          <Route exact path='*' component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  )
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth()
  const { path } = props
  console.log('path', path)
  const location = useLocation()
  console.log('location state', location.state)

  if (
    path === '/login' ||
    path === '/register' ||
    path === '/forgotpassword' ||
    path === '/reset'
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? '/account'} />
    ) : (
      <Route {...props} />
    )
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: path },
      }}
    />
  )
}
