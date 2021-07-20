import React from "react";
import "./Skills.css";
import Progress from "./Progress";
import { frontend } from "../../data/SkillData";
import { programming } from "../../data/SkillData";
import Separator from "../../common/socialContact/separator/Separator";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode  } from "react-icons/fa";
function Skills() {
    const progressfront = frontend;
    const progresscode = programming;
  return (
    <>
    <Separator/>
    <div className="skills">
    <label className="section-title">Skills & Proficiency</label>
      <label className='skill-subtitle'>Languages and Frameworks</label>
      <div className='skill-block'>
      <div className="skill-area">
    <label className='skill-subtitle' style={{marginLeft:"40px"}}><FaLaptopCode/>Frontend Development</label>
          {
              progressfront.map((data) => {
                  return(
                      <Progress data={data}/>
                  );
              })
          }
      </div>
      <div className="skill-area">
      <label className='skill-subtitle' style={{marginLeft:"40px"}}><FaCode/>Programming</label>
          {
              progresscode.map((data) => {
                  return(
                      <Progress data={data}/>
                  );
              })
          }
      </div>
      </div> 
    </div>
    </>
  );
}
export default Skills;