import React from "react";
import "./Contact.css";
import Mailer from "./Mailer";
import Separator from "../../common/socialContact/separator/Separator";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail  } from "react-icons/md";
import {HiLocationMarker  } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <div className='specific'>
            <div style={{marginRight:"15px"}}><FaPhoneAlt size="32px" color="#8A2BE2"/></div>
            <div className='specific-div'>
            <p className='specific-div-head'>Call</p>
            <p className='.specific-div-body'>+91 6260377635</p>
            </div>
          </div>
          <div className='specific'>
            <div style={{marginRight:"15px"}}><MdEmail  size="38px" color="#8A2BE2"/></div>
            <div className='specific-div'>
            <p className='specific-div-head'>Email</p>
            <p className='.specific-div-body'>gunjanbundela.2209@gmail.com</p>
            </div>
          </div>
          <div className='specific'>
            <div style={{marginRight:"15px"}}><HiLocationMarker size="40px" color="#8A2BE2"/></div>
            <div className='specific-div'>
            <p className='specific-div-head'>Location</p>
            <p className='.specific-div-body'>Indore</p>
            </div>
          </div>
          <div className='specific'>
            <div style={{marginRight:"15px"}}><AiFillGithub size="40px" color="#8A2BE2"/></div>
            <div className='specific-div'>
            <p className='specific-div-head'>Github</p>
            <p className='.specific-div-body'>Click on github icon</p>
            </div>
          </div>
          <div className='specific'>
            <div style={{marginRight:"15px"}}><AiFillLinkedin size="40px" color="#8A2BE2"/></div>
            <div className='specific-div'>
            <p className='specific-div-head'>LinkedIn</p>
            <p className='.specific-div-body'>Click on LinkedIn icon</p>
            </div>
          </div>
          <div className="download">
            <a download href={require("../../../assets/resume.pdf").default}>
              <i class="fi-rr-cloud-download download-icon"></i>Download Resume
            </a>
          </div>
        </div>
        <div className="contact-right">
        <Mailer />
        </div>
      </div>
    </div>
  );
}

export default Contact;

