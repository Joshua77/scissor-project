import React from "react";
import "./trial.css";

// change the class to className and import the icons and convert all inline stylings
const Trial = () => {
  return (
    <div className="free-demo">
      <div className="main">
        <div className="paste-url-container">
          <div className="paste-url-form">
            <input type="text" placeholder="Paste URL here" />
          </div>

          <div className="domain-select-group">
            <select name="domain" class="domain-select">
              <option value="lion">Customize Domain</option>
              <option value="tiger">Use Ours</option>
            </select>
            <input
              class="alias-text-input"
              type="text"
              placeholder="Type Alias here"
            />
          </div>

          <div className="button-div">
            <button className="trial-button">Trim URL</button>
          </div>

          <div className="terms-of-service">
            <p>
              {" "}
              By Clicking TrimURL, I agree to the{" "}
              <span style={{fontWeight: "600"}}>Terms of Service, </span>
            </p>
            <p>
              {" "}
              <span style={{fontWeight: "600"}}>Privacy Policy</span> and Use of
              Cookies.{" "}
            </p>
          </div>

          <div className="background"></div>
        </div>
      </div>
    </div>
  );
};


export default Trial;