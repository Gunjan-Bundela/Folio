import React from "react";
import Separator from "../../common/socialContact/separator/Separator";
import "./Education.css";
function Education() {
  return (
    <>
      <Separator />
      <div className="education">
        <label className="section-title" style={{ marginTop: "40px" }}>
          Education
        </label>
        <div className="edu-block">
          <div>
            <img
              src={require("../../../assets/Graduation-bro.png").default}
              alt=""
              className="edu-image"
            />
          </div>
          <div className="edu-info">
            <span className="branch">Information Technology Engineering</span>
            <span className="edu-detail">
              <p id="para1">
                Shri Govindram Seksaria Institute of Technology and Science(2018
                - 2022).
              </p>
              <p id="para2">
                I am currently pursuing Bachelor of Technology in Information
                Technology Engineering at Shri Govindram Seksaria Institute of
                Technology and Science.
                <br />
              </p>
              <p id="para3">
                <b>
                  {" "}
                  SGPA :- 8.82 <br /> CGPA(till 5 sem) :- 7.56 <br />
                </b>
              </p>
            </span>
          </div>
        </div>
        <div className="code-block">
          <div className="para4">Daily Problem Solving at various platforms</div>
          <div className='code-logo'>
            <div>
              <img
                src={require("../../../assets/leetcode.jfif").default}
                alt=""
                className="code-logo-each"
              />
            </div>
            <div className="image-block">
              <img
                src={require("../../../assets/gfg.jpg").default}
                alt=""
                className="code-logo-each"
              />
            </div>
            <div className="image-block">
              <img
                src={require("../../../assets/codechef.jfif").default}
                alt=""
                className="code-logo-each"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
