import React from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { AiOutlineScan } from "react-icons/ai";



const Food = () => {
  return (
    <div className='FoodPage' >
      <h1>Welcome to the Food Page</h1>
      <p>This is the content of the Food page.</p>


      <div className='header' >
        <div className='header_text' >
          <p className='header_title'>Foods</p>
          <p className='header_subtitle' >Checkout the menu for Food & Beverages</p>
        </div>
        <div className='header_line'>
        <HiMagnifyingGlass className='magnifyingGlass_icon' />

        </div>
       {/* <div className='header_line' >|</div> */}
        <div className='header_search' >
          <p className='header_search_text' >Search or scan for items</p>
        </div>
        <AiOutlineScan className='scan_icon' />
        <div className='header_profile' >
          <p className='header_profile_name' >Boy Raka</p>
        </div>
        <CiSettings className='settings_icon' />
      </div>

    </div>
  );
}

export default Food;
