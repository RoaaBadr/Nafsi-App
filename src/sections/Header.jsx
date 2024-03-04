import React from "react";
import BannerImage from "../assets/Chatbot-bro1.png";
import { FiArrowRight } from "react-icons/fi";
import { BubbleChat } from 'flowise-embed-react'


const Home = () => {
  return (
    <div className="home-container">
      <BubbleChat chatflowid="1c4e3117-28fd-4869-ba69-91e89bbcc8b3" apiHost="http://localhost:3000" />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Mental Health Journey Begins Now
          </h1>
          <p className="primary-text">
            start your Journey to emotional wellness today. 
            chat, connect and experience the positive impact of 
            conversations.
          </p>
          <button className="secondary-button">
            Let's Chat <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
