import React from "react";
import './footer.css';

// change the class to className and import the icons and convert all inline stylings
export const Footer = () =>{
    return(
        <div className="footer-container">
        <div className="top-container">
          <div className="top-button-container">
            <h2 style="color: white">Revolutionizing Link Optimization</h2>
            <button>Get Started</button>
          </div>
        </div>
  
        <div className="bottom-container">
          <div className="bottom-container-content">
            <div className="social-frame">
              <div><img style= "color: black;"src ="/assets/Logo.png" alt="black-logo"/></div>
              <div className="social-media-frame">
                  
                  <img src="/assets/twitter 1.png" alt="twitter"/>
                  <img src="/assets/instagram.png" alt="instagram"/>
                  <img src="/assets/linkedin 3.png" alt="linkedin"/>
                  <img src="/assets/fb 4.png" alt="facebook"/>
              </div>
            </div>
  
  
  
            <div className="first-frame">
              <div className="first-frame-top">
                <h4>Why Scissors?</h4>
                <p>Scissors 101</p>
                <p>Integrations & API</p>
                <p>Pricing</p>
              </div>
  
              <div className="first-frame-bottom">
                <h4>Resources</h4>
                <p>Blog</p>
                <p>Resource Library</p>
                <p>Developers</p>
                <p>App Connections</p>
                <p>Support</p>
                <p>Trust Center</p>
                <p>Browser Extension</p>
                <p>Mobile App</p>
              </div>
            </div>
  
            <div className="second-frame">
              <div className="second-frame-top">
                <h4>Solutions</h4>
                <p>Social Media</p>
                <p>Digital Marketing</p>
                <p>Customer Service</p>
                <p>For Developers</p>
              </div>
  
              <div className="second-frame-bottom">
                <h4>Features</h4>
                <p>Branded Links</p>
                <p>Mobile Links</p>
                <p>Campaign</p>
                <p>Management &</p>
                <p>Analytics</p>
                <p>QR Code generation</p>
              </div>
              </div>
            <div className="third-frame">
              <div className="third-frame-top">
                <h4>Products</h4>
                <p>Link Management</p>
                <p>QR Codes</p>
                <p>Link-in-bio</p>
              </div>
  
              <div className="third-frame-bottom">
                <h4>Legal</h4>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Terms of Service</p>
                <p>Acceptable Use Policy</p>
                <p>Code of Conduct</p>
              </div>
            </div>
            <div className="fourth-frame">
              <div className="fourth-frame-top">
                <h4>Company</h4>
                <p>About Scissors</p>
                <p>Careers</p>
                <p>Partners</p>
                <p>Press</p>
                <p>Contact</p>
                <p>Reviews</p>
              </div>
            </div>
        </div>
        </div>
  
  
        <div className="footer-bottom"> 
          <p>Term of Service | Security | ⓒ Scissor 2023</p> 
        </div>
      </div>
    );
}