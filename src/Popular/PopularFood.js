import React from "react";
import "../App.css";
import Pizza from "./popular_food_images/pizza.png";

const PopularFood = () => {
  return (
    <div className="x">
      <div className="y">
        <div className="colorDiv ">
          <div className="pink">
            <p>Cheese Pizza</p>
            <p>$ 82</p>
          </div>
          <div className="yellow">
            <img src={Pizza} alt="My Image" className="foodImage" />
          </div>
        </div>
      </div>
      <div className="tessst" />
    </div>
  );
};

export default PopularFood;
