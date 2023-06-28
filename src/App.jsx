import React from 'react'
//import Footer from './component/Footer/footer'
import Onestop from './component/onestop/onestop'
import NavBar from './component/NavBar/NavBar'
import { Pricing } from './component/Pricing/Pricing'
import { Trial } from './component/Trial/trial'
import Faq from './component/Faq/Faq'

import AppRouter from './component/AppRoutes'
import AuthContextProvider from './contexts/Authcontext'

function App(props) {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  
 )
}

export default App




