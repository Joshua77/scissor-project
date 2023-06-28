import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from '../../pages/Home'
import "./hero.css";
import logo from "../../assets/Logo.png";

const NavBar = () => {
  return (
    <>
      <div className="hero">
        <div className="nav-container">
          <div className="logo-container">
            <img src={logo} alt="scissors logo" />
          </div>
          <div className="link-group">
            <ul className="section-links">
              <li style={{ color: "#0065fe" }}>
                <NavLink to="/account" name="My URLs" />
                My URLs
              </li>
              <li>
                <NavLink to="/" name="Features" />
                Features
              </li>
              <li>
                <NavLink to="/pricing" name="Pricing" />
                Pricing
              </li>
              <li>
                <NavLink to="/account" name="Analytics" />
                Analytics
              </li>
              <li>
                <NavLink to="/" name="FAQs" />
                FAQs
              </li>
            </ul>
          </div>
          <div className="login-container">
            <p>
              <NavLink
                to="/pages/login"
                name="Log in"
                onClick={async (e) => {
                  e.preventDefault();
                  // await login()
                }}
              />
              Log in
            </p>
            <button>
              {" "}
              <NavLink
                to="/pages/signup"
                name="Try for free"
                onClick={async (e) => {
                  e.preventDefault();
                  //  await login()
                }}
              />
              Try for Free
            </button>
          </div>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default NavBar;
