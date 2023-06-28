import React from "react";
import './pricing.css';
import line70 from '../../assets/Line 70.png'
import checkboxblue from '../../assets/checkboxblue.png'
import checkboxwhite from '../../assets/checkboxwhite.png'

// change the class to className and import the icons and convert all inline stylings
export const Pricing = () =>{
    return(
        <div className="price-container">
      <div className="perfect-pricing-frame">
        <div className="perfect-price-heading">
          <img src= {line70} alt="pricing section" />
          <h3>
            A <span style={{color: "#005ae2"}}> price perfect</span> for your needs
          </h3>
        </div>
        <div className="perfect-pricing-frame-sub">
          <p>
            From catering for your personal, business, event, socials needs, you
            can be <br />
            rest assured we have you in mind in our pricing.
          </p>
        </div>
      </div>

      <div className="pricing-card-section">
        <div className="basic-card">
          <div className="card-items">
            <div className="basic-text"> Basic</div>
            <div className="free-text">Free</div>
            <div style={{fontSize: "24px"}}class ="free-all">Free plan for all</div>
            <div className="basic-feature-row">
                <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>Unlimited URL shortening</p>            
            </div>
            <div className="basic-feature-row">
              <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>Basic Link Analytics</p>
            </div>
            <div className="basic-feature-row">
              <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>Customizable Short Links</p>
            </div>
            <div className="basic-feature-row">
              <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>Standard Support</p>
            </div>
            <div className="basic-feature-row">
              <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>Ad-supported</p>
            </div>
          
           
          </div>
        </div>
        <div className="teams-card">
          <div className="card-items">
            <div className="basic-text"> Teams </div>
            <div className="free-text">$25/month</div>
            <div style={{fontSize: "24px"}}class ="free-all">Share with up to 10 users </div>
            <div className="basic-feature-row">
                <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>Team Collaboration</p>            
            </div>
            <div className="basic-feature-row">
              <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>User Roles & Permissions</p>
            </div>
            <div className="basic-feature-row">
              <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>Enhanced Security</p>
            </div>
            <div className="basic-feature-row">
              <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>API access</p>
            </div>
            <div className="basic-feature-row">
              <img src={checkboxblue} alt="checkboxblue"/>
              <p style={{marginLeft: "10px"}}>Dedicated Account Manager</p>
            </div>
          </div>
        </div>
        <div className="professional-card">
          <div className="professional-card-items">
            <div className="professional-text"> Professional </div>
            <div className="professional-free-all">$15/month</div>
            <div style= {{fontSize: "24px", color: "white"}}class ="free-all">Ideal for business creators </div>
            <div className="basic-feature-row">
                <img src={checkboxwhite} alt="checkbox"/>
              <p style={{marginLeft: "10px", color: "white"}}>Team Collaboration</p>            
            </div>
            <div className="basic-feature-row">
              <img src={checkboxwhite} alt="checkbox"/>
              <p style={{marginLeft: "10px", color: "white"}}>User Roles & Permissions</p>
            </div>
            <div className="basic-feature-row">
              <img src={checkboxwhite} alt="checkbox"/>
              <p style={{marginLeft: "10px", color: "white"}}>Enhanced Security</p>
            </div>
            <div className="basic-feature-row">
              <img src={checkboxwhite} alt="checkbox"/>
              <p style={{marginLeft: "10px", color: "white"}}>API access</p>
            </div>
            <div className="basic-feature-row">
              <img src={checkboxwhite} alt="checkbox"/>
              <p style={{marginLeft: "10px", color: "white"}}>Dedicated Account Manager</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="pricing-button-group">
        <button className="custom-pricing">Custom Pricing</button>
        <button className="select-pricing">Select Pricing</button>
      </div>
    </div>

    );
}