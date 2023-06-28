import React from "react";
import './onestop.css';

// change the class to className and import the icons and convert all inline stylings
const Onestop = () =>{
    return(
        <div className="onestop-container">
        <div className="onestop-container-top">
          <div className="first-frame">
            <p>
              One Stop.<br />Four
              <span style={{color: "#005ae2;"}}>Possibilities</span>.
            </p>
          </div>
          <div className="second-frame">
            <div className="second-frame-details">
              <div className="second-frame-heading">
                <h3>3M</h3>
                <p>Active Users</p>
              </div>
            </div>
            <div className="second-frame-details">
              <div className="second-frame-heading">
                <h3>60M</h3>
                <p>Links & QR codes created</p>
              </div>
            </div>
            <div className="second-frame-details">
              <div className="second-frame-heading">
                <h3>1B</h3>
                <p style={{width:"150px"}}>Clicked & Scanned connections</p>
              </div>
            </div>
            <div className="second-frame-details">
              <div style={{width:"200px"}} className="second-frame-heading">
                <h3>400k</h3>
                <p style={{width:"120px"}}>App Integrations</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="onestop-container-bottom">
          <div className="bottom-left">
            <div className="bottom-left-title">
              
              <p>Why Choose <span style={{color: "#005ae2"}}>Scissors</span></p>
            </div>
            <div className="bottom-left-text">
              <p>
                Scissors is the hub of everything that has to do <br />
                with your link management. We shorten your URLs, <br />
                allowing you to create custom ones for personal, <br />
                business, event usage. Our swift QR code <br />
                creation, management and usage tracking with <br />
                advance analytics for all of these is second to <br />
                none
              </p>
            </div>
          </div>
  
          <div className="bottom-right">
            <div className="feature-onetwo">
              <div className="feature-one">
                <div className="bluecircle">
                  <img className="icon" src="/assets/link-2.png" alt="url-link" />
                </div>
                <div>
                  <h3>Url Shortening</h3>
                  <p>
                    Scissors allows you to shorten URLs of your <br />
                    business, events. Shorten your URLs at scale, <br />
                    URL redirects.
                  </p>
                </div>
              </div>
              <div className="feature-two">
                <div className="bluecircle">
                  <img className="icon" src="/assets/edit.png" alt="edit" />
                </div>
                <div>
                  <h3>Custom URLs</h3>
                  <p>
                    With Scissor, you can create custom URLs, <br />
                    with the length you want! A solution for socials <br />
                    and business.
                  </p>
                </div>
              </div>
            </div>
  
            <div className="feature-threefour">
              <div className="feature-three">
                <div className="bluecircle">
                  <img className="icon" src="/assets/grid.png" alt="edit" />
                </div>
                <div>
                  <h3>QR Codes</h3>
                  <p>
                    Generate QR Codes to your business, events. <br />
                    Bring your audience and customers to your <br />
                    doorstep with this scan and go solution
                  </p>
                </div>
              </div>
              <div className="feature-four">
                <div className="bluecircle">
                  <img className="icon" src="/assets/activity.png" alt="edit" />
                </div>
                <div>
                  <h3>Data Analytics</h3>
                  <p>
                    Receive data on the usage of either your <br />
                    shortened URL, custom URLs or generated QR <br />
                    codes. Embeded to monitor progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Onestop;