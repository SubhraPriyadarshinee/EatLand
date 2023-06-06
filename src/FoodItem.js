import React from 'react';
import {  BsCheckLg } from "react-icons/bs";

const FoodItem = () => {
  return (
    <div className='div_foodItem_bgImage' >
        <p className='div_foodItem_Price'>Rp 20,000</p>
        <p className='div_foodItem_Name'>Spaghetti with Bread Dish</p>
        <div className='div_foodItem_selected'>
            <BsCheckLg className='div_foodItem_selected_tickIcon' />
        </div>
    </div>
  );
}

export default FoodItem;
