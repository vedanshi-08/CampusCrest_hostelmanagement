import React from "react";
import AboutBackgroundImage from  "../Assets/homepageimage.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
         It's a scholar's abode!
        </h1>
        <p className="primary-text">
        Each room is thoughtfully furnished with essential amenities, including comfortable beds, study desks, ample storage space, and high-speed internet access, providing you with the perfect environment to focus on your studies or unwind after a long day.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;