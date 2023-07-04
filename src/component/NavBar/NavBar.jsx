import React from "react";
import { NavLink } from "react-router-dom";
//import Home from '../../pages/Home'
import "./navbar.css";
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
            <div className="section-links">
              <li style={{ color: "#0065fe" }}>
                <NavLink to="/login" name="My URLs">
                  My URLs{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" name="Features">
                  Features{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" name="Pricing">
                  Pricing{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/account" name="Analytics">
                  Analytics{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" name="FAQs">
                  FAQs{" "}
                </NavLink>
              </li>
            </div>
          </div>
          <div className="login-container">
            <p>
              <NavLink to="/login" name="Log in">
                Log in{" "}
              </NavLink>
            </p>
            <button>
              {" "}
              <NavLink to="/register" name="Try for free">
                Try for Free{" "}
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
