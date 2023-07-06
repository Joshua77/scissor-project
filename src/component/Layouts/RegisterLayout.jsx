import React from "react";
import Register from '../../component/Register'
import Footer from "../Footer/footer";
import NavBar from "../NavBar/NavBar";


const RegisterLayout  = ({children}) =>{
    return (
        <>
          <NavBar />       
          <Register />
          <Footer />
        </>
      )
  
  }
  
  export default RegisterLayout;