import React from "react";

import Footer from '../component/Footer/footer'
import Hero from '../component/Hero/hero'
import Onestop from '../component/onestop/onestop'
import NavBar from '../component/NavBar/NavBar'
import Pricing from '../component/Pricing/pricing'
import Trial from './Trial/Trial'
import Faq from '../component/Faq/faq'


const Layout = ({children}) =>{
    return (
        <>
          <NavBar />
          <Hero />
          <Onestop />
          <Trial />        
          <Faq />
          <Footer />
        </>
      )

}


export default Layout;