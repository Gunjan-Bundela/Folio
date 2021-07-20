import "./About.css";
import Separator from "../../common/socialContact/separator/Separator";
function About() {
  return (
    <>
      <Separator />
      <div className="section-title">About</div>
      <div className="about">
        <div className="about-text">
          <div className="about-text-top">
            A passionate Web Developer with moderate level of knowledge having an experience of building Web Applications with Javascript/ Reactjs / HTML / CSS and some other cool frameworks.
          </div>
          <div className="about-text-bottom">
            <div className="about-box">
              <div className="about-text-bottom-bold">01+</div>
              <p>year <br/>experience</p>
            </div>
            <div  className="about-box">
              <div className="about-text-bottom-bold">03+</div>
              <p>projects <br/>completed</p>
            </div>
            <div  className="about-box">
              <div className="about-text-bottom-bold">00</div>
              <p>companies<br/>worked</p>
            </div>
          </div>
        </div>
        <div className="tophome-photo-about">
          <img
            src={require("../../../assets/undraw4.svg").default}
            alt=""
            className="image"
          />
        </div>
      </div>
    </>
  );
}

export default About;
