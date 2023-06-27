import React from "react";
import { Route, Link } from react-router-dom;
import "../Hero/hero.css";

const NavBar = () => {
  return (
    <div className="hero">
      <div className="nav-container">
        <div className="logo-container">
          <img src="/assets/Logo.png" alt="scissors logo" />
        </div>
        <div className="link-group">
          <ul className="section-links">
            <li style="color: #0065fe"><Link to ="/account" name='My URLs'/>My URLs</li>
            <li><Link to ="/" name='Features'/>Features</li>
            <li><Link to ="/pricing" name='Pricing'/>Pricing</li>
            <li><Link to ="/account" name='Analytics'/>Analytics</li>
            <li><Link to ="/" name='FAQs'/>FAQs</li>
          </ul>
        
        </div>
        <div className="login-container">
          <p><Link to="/pages/login" name ="Log in" onClick={async e => {
              e.preventDefault()
              await login()
            }}/>Log in</p>
          <button> <Link to="/pages/signup" name ="Try for free" onClick={async e => {
              e.preventDefault()
              await login()}}/>Try for Free</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
