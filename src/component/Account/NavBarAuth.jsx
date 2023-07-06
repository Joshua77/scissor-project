import React from "react";
import { NavLink } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
//import { Layout } from "../components/Layout";
import { useAuth } from "../../contexts/Authcontext";
//import Home from '../../pages/Home'
import "../../component/NavBar/navbar.css";
import logo from "../../assets/Logo.png";

const NavBarAuth = () => {
  const navigate = useNavigate;
  const { logout } = useAuth();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

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
                <NavLink to="/" name="My URLs">
                  My URLs{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" name="Features">
                  Features{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" name="Pricing">
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
            <button onClick={handleLogout}>
              {" "}
              <NavLink to="/" name="Log out">
                Log out{" "}
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarAuth;
