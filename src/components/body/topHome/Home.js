import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
function Home() {
  return (
    <div className="tophome">
      <div className="tophome-top">
          <div className="tophome-photo">
            <img
              src={require("../../../assets/undraw2.svg").default}
              alt=""
              className="image"
            />
          </div>
        <div className="tophome-info">
          Hello there
          <br /> I'm
          <span className="info-name"> Gunjan Bundela</span>
          <br />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I Am Enthusiastic Coder!")
                .pause(2000)
                .deleteAll()
                .typeString("I Am Frontend Developer !")
                .pause(2000)
                .deleteAll()
                .typeString("I Love Experimenting with web!")
                .start();
            }}
          />

          </div>
        </div>
      </div>
  );
}

export default Home;
