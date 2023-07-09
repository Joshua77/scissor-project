import React from "react";
import ForgotPasswordPage from "./pages/ForgotPassword";
import Loginpage from "./pages/Loginpage";
import Home from "./pages/Home";
import Registerpage from "./pages/Registerpage";
import Account from "./component/Account/index";
import ResetPasswordPage from "./pages/ResetPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import ProtectedRoute from "./component/ProtectedRoute";
import AuthContextProvider from "./contexts/useAuth";
import LinkRedirect from "../src/component/LinkRedirect/index";
import QRpage from "./pages/QRpage";

//how will the position of the Link Redirect component affects its functionlity

function App(props) {
  return (
  <AuthContextProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/register" element={<Registerpage />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/forgot" element={<ForgotPasswordPage />} />
        <Route exact path="/reset" element={<ResetPasswordPage />} />
        <Route exact path="/qrpage" element = {<QRpage />} />
        <Route path="/:shortCode" element={<LinkRedirect />} />
      </Routes>
    </Router>
  </AuthContextProvider>
  );
}

export default App;


// function App(props) {
//   return (
//     <AuthContextProvider>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/login" element={<Loginpage />} />
//         <Route exact path="/register" element={<Registerpage />} />
//         <Route exact path="/account" element={<Account />} />
//         <Route exact path="/forgot" element={<ForgotPasswordPage />} />
//         <Route exact path="/reset" element={<ResetPasswordPage />} />
//         <Route path="/:shortCode" element={<LinkRedirect />} />
//       </Routes>
//     </AuthContextProvider>
//   );
// }

