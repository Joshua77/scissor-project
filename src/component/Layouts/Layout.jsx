import React from "react";

import Footer from '../Footer/footer'
import Hero from '../Hero/hero'
import Onestop from '../onestop/onestop'
import NavBar from '../NavBar/NavBar'
import Pricing from '../Pricing/pricing'
import Trial from '../Trial/Trial'
import Faq from '../Faq/faq'


const Layout = ({children}) =>{
    return (
        <>
          <NavBar />
          <Hero />
          <Onestop />
          <Pricing />
          <Trial />        
          <Faq />
          <Footer />
        </>
      )

}


export default Layout;

