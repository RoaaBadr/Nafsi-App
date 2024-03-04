import React from "react";
import AboutBackgroundImage from "../assets/Appinstallation.png";
import google from "../assets/google.svg";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          We are more than a chatbot
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default About;
