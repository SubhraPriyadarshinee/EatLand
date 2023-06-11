import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import "./App.css";
import Food from "./Header";
import Drinks from "./FoodGrid";
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
        
        <div className="app_placement">
          <Sidebar />

          <div className="app_placement_content" >

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/food" element={<Food />} />
            <Route path="/drinks" element={<Drinks />} /> */}
            <Route path="/latest" element={<Snacks />} />
            {/* <Route path="/desert" element={<Desert />} /> */}

            <Route path="*" element={<Home />} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
