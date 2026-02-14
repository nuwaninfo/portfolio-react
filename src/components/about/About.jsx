import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/profile_img.jpeg";

const About = () => {
  return (
    <div className="about" id="about-me">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a software developer with a passion for developing and
              learning new things.
            </p>
            <p>
              I would like to help businesses to become succeed from what I have
              learned.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Drupal</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS DONE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
