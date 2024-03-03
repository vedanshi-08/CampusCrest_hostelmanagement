import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      
      title: "WiFi",
      text: "24x7 avaibility of internet facility to students.",
    },
    {
      
      title: "Laundry",
      text: "Self-service laundry rooms with washing machines and dryers",
    },
    {
      
      title: "Meals",
      text: "Freshly prepared breakfast, lunch and dinner is served",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Facilities</p>
        <h1 className="primary-heading">Top Facilities</h1>
        <p className="primary-text">
        We understand the importance of maintaining a healthy balance between academic pursuits and personal well-being. 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;