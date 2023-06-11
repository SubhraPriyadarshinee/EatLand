import React from "react";
import {  BsCheckLg } from "react-icons/bs";


const Grid = ({ items }) => {
  return (
    <div className="grid-container">
      {items.map((item) => (
        <div key={item.id} className="grid-item">
          <div className="div_foodItem_bgImage" 
          style={{ backgroundImage: `url(${item.image})` }}>
            <p className="div_foodItem_Price">{item.price}</p>
            <p className="div_foodItem_Name">{item.description}</p>
            <div className="div_foodItem_selected">
              <BsCheckLg className="div_foodItem_selected_tickIcon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
