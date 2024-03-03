import React from "react";
import BannerImage from "../Assets/aboutimage.jpg"
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
            Home away from Home!
          </h1>
          <p className="primary-text">
          Nestled in the heart of the vibrant university district, our hostel offers a warm and welcoming environment tailored to meet the needs of modern-day students.
          </p>
          <button className="secondary-button">
            Admissions <FiArrowRight />{" "}
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