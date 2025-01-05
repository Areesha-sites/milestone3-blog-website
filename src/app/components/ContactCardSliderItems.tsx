import React from "react";
import { followData } from "../../../public/sliderData/BlogData";
import ContactCardSlider from "./ContactCardSlider";
const ContactCardSliderItems = () => {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {followData.map((item) => (
          <div key={item.id} className="slider-item">
            <ContactCardSlider  image={item.image} id={item.id}  />
          </div>
        ))}
        {followData.map((item) => (
          <div key={`duplicate-${item.id}`} className="slider-item">
            <ContactCardSlider  image={item.image} id={item.id}  />
            </div>
        ))}
      </div>
    </div>
  );
};
export default ContactCardSliderItems;
