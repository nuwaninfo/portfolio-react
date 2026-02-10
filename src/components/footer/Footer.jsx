import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo_nuwan.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>I am Nuwan, a passionate web developer.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
