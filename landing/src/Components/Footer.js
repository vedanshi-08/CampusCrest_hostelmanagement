import React from "react";



const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h2>CAMPUS CREST</h2>
        </div>
        
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Facilities</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@campuscrest.com</span>
          <span>press@campuscrest.com</span>
          <span>contact@campuscrest.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;