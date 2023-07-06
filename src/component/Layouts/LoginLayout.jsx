import React from "react";
import Login from "../Login";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/footer";

const LoginLayout = ({children}) =>{
    return (
        <>
          <NavBar />
          <Login />
          <Footer />
        </>
      )

}

export default LoginLayout;