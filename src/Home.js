import React from "react";
import NewOrder from "./NewOrder";
import Header from "./Header";
import FoodGrid from "./FoodGrid";
import { AiOutlineRight ,AiFillCreditCard} from "react-icons/ai";


const Home = () => {
  return (
    <div className="div_content">
      <Header className="content_header" />
      <div className="div_content_2" >
        
        
      </div>
      <div className="div_content_3" >
        <FoodGrid  />
        <NewOrder  />
      </div>
    </div>
  );
};

export default Home;
