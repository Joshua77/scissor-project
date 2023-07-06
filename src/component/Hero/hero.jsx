import React from "react";
import "./hero.css";
import blueline from "../../assets/Blue line.png"
import lastlink from "../../assets/lastlink.png"
import heromainvector from '../../assets/hero-main-vector.png'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-section">
          <div className="hero-section-title">
            Optimize Your Online Experience with Our Advanced
            <span style={{color: "#0065fe"}}> URL Shortening </span>Solution
            <div className="hero-img">
              <img src={heromainvector} alt="hero-main-vector" />
            </div>
          </div>

          <div className="hero-section-subtitle">
            <p>
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, <br />
              branded links, and domain customization options to reinforce your
              brand presence and <br />
              enhance user engagement.
            </p>

            <div className="sign-up">
              <button style={{marginRight: "30px"}}>Sign up</button>
              <p style={{marginRight: "30px"}} className="learn">
                Learn more
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="vector2-main">
        <div className="seamlesstransform">
          <div className="arrow-row">
            <div className="arrows">
              <img src={lastlink} alt="hero-main-vector" />
              <img src={lastlink} alt="hero-main-vector" />
              <img src={lastlink} alt="hero-main-vector" />
            </div>
            <div className="arrows-2">
              <img src={blueline} alt="hero-main-vector" />
              <img src={lastlink} alt="hero-main-vector" />
            </div>
          </div>

          <p>
            Seamless transforming your long URLs into concise and sharable links
            with just few clicks.
          </p>
        </div>
      </div>

      <div className="first-backgroundblur"></div>
      <div className="second-backgroundblur"></div>
      <div className="third-backgroundblur"></div>
      <div className="hero-base-ellipse"></div>
      <div className="hero-base-rectangle"></div>
    </>
  );
};

export default Hero;
