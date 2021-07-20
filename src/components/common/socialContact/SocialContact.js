import React from "react";
import "./SocialContact.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function SocialContact() {
  return (
    <div className="social-contact">
      <a href="https://www.linkedin.com/">
        <div className="social-icon-div">
          <AiFillGithub size="40px" color="#8A2BE2"/>
        </div>
      </a>
      <a href='https://www.linkedin.com/'>
        <div className="social-icon-div">
          <AiFillLinkedin size="40px" color="#8A2BE2"/>
        </div>
      </a>
    </div>
  );
}

export default SocialContact;
