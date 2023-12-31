import React from "react";
import '../Footer/footer.css';
import Logo from '../../assets/Logo.png'
import Twitter from '../../assets/twitter 1.png'
import Linkedin from '../../assets/linkedin 3.png'
import Facebook from '../../assets/fb 4.png'
import IG from '../../assets/instagram.png'

// change the class to className and import the icons and convert all inline stylings
const Footer = () =>{
    return(
      <>
        <div className="footer-container">
            <div className="top-container">
              <div className="top-button-container">
               <h2 style = {{color: "white"}}>Revolutionizing Link Optimization</h2>
               <button>Get Started</button>
              </div>
            </div>
  
            <div className="bottom-container">
               <div className="bottom-container-content">
                  <div className="social-frame">
                   <div><img style= {{color: "black"}}src = {Logo} alt="black-logo"/></div>
                   <div className="social-media-frame">
                  
                      <img src={Twitter} alt="twitter"/>
                      <img src={IG} alt="instagram"/>
                      <img src={Linkedin} alt="linkedin"/>
                      <img src= {Facebook} alt="facebook"/>
                   </div>
                  </div>
  
  
  
                  <div className="footer-first-frame">
                    <div className="footer-first-frame-top">
                      <h4>Why Scissors?</h4>
                      <p>Scissors 101</p>
                      <p>Integrations & API</p>
                      <p>Pricing</p>
                    </div>
  
                    <div className="footer-first-frame-bottom">
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
  
                  <div className="footer-second-frame">
                    <div className="footer-second-frame-top">
                      <h4>Solutions</h4>
                      <p>Social Media</p>
                      <p>Digital Marketing</p>
                      <p>Customer Service</p>
                      <p>For Developers</p>
                    </div>
                  
  
                    <div className="footer-second-frame-bottom">
                      <h4>Features</h4>
                      <p>Branded Links</p>
                      <p>Mobile Links</p>
                      <p>Campaign</p>
                      <p>Management &</p>
                      <p>Analytics</p>
                      <p>QR Code generation</p>
                    </div>
                  </div>
                  <div className="footer-third-frame">
                    <div className="footer-third-frame-top">
                      <h4>Products</h4>
                      <p>Link Management</p>
                      <p>QR Codes</p>
                      <p>Link-in-bio</p>
                    </div>
  
                    <div className="footer-third-frame-bottom">
                      <h4>Legal</h4>
                      <p>Privacy Policy</p>
                      <p>Cookie Policy</p>
                      <p>Terms of Service</p>
                      <p>Acceptable Use Policy</p>
                      <p>Code of Conduct</p>
                    </div>
                  </div>

                  <div className="footer-fourth-frame">
                    <div className="footer-fourth-frame-top">
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
    </>
    );
}

export default Footer;