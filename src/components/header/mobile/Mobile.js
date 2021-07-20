import React from "react";
import "./Mobile.css";
import {RiHome2Fill } from "react-icons/ri";
import { BsFillPersonFill} from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
function Mobile({ isOpen, setIsOpen }) {
  const onClickHandler = () => {
     setIsOpen(!isOpen)
  } 
  return (
    <div className="mobile">
      <div className="close-icon" onClick={onClickHandler}>
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option" onClick={onClickHandler}>
          <a href="#home"><RiHome2Fill className="option-icon"/>Home</a>
        </div>
        <div className="mobile-option" onClick={onClickHandler}>
          <a href="#about"><BsFillPersonFill className="option-icon"/>About</a>
        </div>
        <div className="mobile-option" onClick={onClickHandler}>
          <a href="#education"><FaGraduationCap className="option-icon"/>Education</a>
        </div>
        <div className="mobile-option" onClick={onClickHandler}>
          <a href="#skills"><FaLaptopCode className="option-icon"/>Skills</a>
        </div>
        <div className="mobile-option" onClick={onClickHandler}>
          <a href="#project"><FaCode className="option-icon"/>Project</a>
        </div>
        <div className="mobile-option" onClick={onClickHandler}>
          <a href="#contact"><MdPermContactCalendar className="option-icon"/>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;


