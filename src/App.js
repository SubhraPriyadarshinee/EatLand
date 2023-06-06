import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import "./App.css";
import Food from "./Food";
import Drinks from "./Drinks";
import Snacks from "./Snacks";
import Desert from "./Desert";
import Home from "./Home";
import NotFound from "./NotFound";
import SignupScreen from "./SignupScreen";
import Attachment from "./attachment1.jpg";
import PopularFood from "./Popular/PopularFood";
import FoodItem from "./FoodItem";


function App() {
  return (
    <Router>
      <div className="app">
       
        {/* <SignupScreen /> */}
        {/* <div style={{ height: "100vh", width: "100vw" }}>
          <img
            src={Attachment}
            alt="My Image"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div> */}
        {/* <PopularFood/> */}
        <div className="app_placement">
          <Sidebar />
          {/* <FoodItem/> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/snacks" element={<Snacks />} />
            <Route path="/desert" element={<Desert />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
