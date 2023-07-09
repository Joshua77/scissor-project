import React from "react";
import QRcode from "../QRcode/QRcode";
import NavBarAuth from "../Account/NavBarAuth";
// import Footer from "../Footer/footer";

const QRcodeLayout = ({children}) =>{
    return (
        <>
          <NavBarAuth />
          <QRcode />
        </>
      )

}

export default QRcodeLayout;