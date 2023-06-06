import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faBeer,
  faCutlery,
  faFire,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import { FaBeer, FaHotjar } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { GiChickenOven, GiSadCrab, GiPopcorn } from "react-icons/gi";
import { CiBowlNoodles, CiPizza } from "react-icons/ci";
import { LuCupSoda, LuIceCream2 } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import Popcorn from "./Popular/popular_food_images/popcorn1.png";

const Sidebar = () => {
  // const [showSubMenu, setShowSubMenu] = useState(false);

  // const handleSubMenuToggle = () => {
  //   setShowSubMenu(!showSubMenu);
  // };

  // const handleSubMenuClose = () => {
  //   setShowSubMenu(false);
  // };

  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleSubMenuToggle = (index) => {
    setActiveSubMenu(index);
  };

  const handleSubMenuClose = () => {
    // setTimeout(() => {
    setActiveSubMenu(null);
    // }, 3000);
  };

  const calculateSubMenuTop = (index) => {
    const sidebarLink = document.querySelector(`#link-${index}`);
    const sidebarLinkRect = sidebarLink.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return sidebarLinkRect.top + scrollTop;
  };

  return (
    <div
      className="sidebar"
    >
      <Link
        to="/"
        id="link-0"
        className={`sidebar-link ${activeSubMenu === 0 ? "active" : ""}`}
        exact
        onMouseEnter={() => handleSubMenuToggle(0)}
        onMouseLeave={handleSubMenuClose}
      >
        <FaHotjar className="sidebarIcon" />
        {/* <Popcorn/> */}
        {/* <img src="{Popcorn}" /> */}

        <span className="sidenav_title">Foods</span>
      </Link>
      {activeSubMenu === 0 && (
        <div
          className="submenu"
          onMouseEnter={() => handleSubMenuToggle(0)}
          onMouseLeave={handleSubMenuClose}
          style={{ top: calculateSubMenuTop(0) }}
        >
          <div>
            <Link to="/food" activeClassName="active">
              food1
            </Link>
            <Link to="/food" activeClassName="active">
              food2
            </Link>
          </div>
        </div>
      )}

      <Link
        to="/food"
        id="link-1"
        className={`sidebar-link ${activeSubMenu === 1 ? "active" : ""}`}
        onMouseEnter={() => handleSubMenuToggle(1)}
        onMouseLeave={handleSubMenuClose}
      >
        <IoFastFoodOutline className="sidebarIcon" />
        <span className="sidenav_title">Foods</span>
      </Link>
      {activeSubMenu === 1 && (
        <div
          className="submenu"
          onMouseEnter={() => handleSubMenuToggle(1)}
          onMouseLeave={handleSubMenuClose}
          style={{ top: calculateSubMenuTop(1) }}
        >
          <div>
            <Link to="/food" activeClassName="active">
              <div className="submenu_item">
                <GiChickenOven className="submenuIcon" />
                <div className="submenu_item_name">Chicken</div>
              </div>
            </Link>
            <Link to="/food" activeClassName="active">
              <div className="submenu_item">
                <GiSadCrab className="submenuIcon" />
                <div className="submenu_item_name">SeaFood</div>
              </div>
            </Link>
            <Link to="/food" activeClassName="active">
              <div className="submenu_item">
                <CiPizza className="submenuIcon" />
                <div className="submenu_item_name">Pizza</div>
              </div>
            </Link>
            <Link to="/food" activeClassName="active">
              <div className="submenu_item">
                <CiBowlNoodles className="submenuIcon" />
                <div className="submenu_item_name">Pasta</div>
              </div>
            </Link>
          </div>
        </div>
      )}

      <Link
        to="/drinks"
        id="link-2"
        className={`sidebar-link ${activeSubMenu === 2 ? "active" : ""}`}
        onMouseEnter={() => handleSubMenuToggle(2)}
        onMouseLeave={handleSubMenuClose}
      >
        <LuCupSoda className="sidebarIcon" />
        <span className="sidenav_title">Drinks</span>
      </Link>
      {activeSubMenu === 2 && (
        <div
          className="submenu"
          onMouseEnter={() => handleSubMenuToggle(2)}
          onMouseLeave={handleSubMenuClose}
          style={{ top: calculateSubMenuTop(2) }}
        >
          <div>
            <Link to="/drinks" activeClassName="active">
              drinks1
            </Link>
            <Link to="/drinks" activeClassName="active">
              drinks2
            </Link>
          </div>
        </div>
      )}

      <Link
        to="/snacks"
        id="link-3"
        className={`sidebar-link ${activeSubMenu === 3 ? "active" : ""}`}
        onMouseEnter={() => handleSubMenuToggle(3)}
        onMouseLeave={handleSubMenuClose}
      >
        <GiPopcorn className="sidebarIcon" />
        <span className="sidenav_title">Snack</span>
      </Link>
      {activeSubMenu === 3 && (
        <div
          className="submenu"
          onMouseEnter={() => handleSubMenuToggle(3)}
          onMouseLeave={handleSubMenuClose}
          style={{ top: calculateSubMenuTop(3) }}
        >
          <div>
            <Link to="/snacks" activeClassName="active">
              snack1
            </Link>
            <Link to="/snacks" activeClassName="active">
              snack2
            </Link>
          </div>
        </div>
      )}

      <Link
        to="/desert"
        id="link-4"
        className={`sidebar-link ${activeSubMenu === 4 ? "active" : ""}`}
        onMouseEnter={() => handleSubMenuToggle(4)}
        onMouseLeave={handleSubMenuClose}
      >
        <LuIceCream2 className="sidebarIcon" />
        <span className="sidenav_title">Desert</span>
      </Link>
      {activeSubMenu === 4 && (
        <div
          className="submenu"
          onMouseEnter={() => handleSubMenuToggle(4)}
          onMouseLeave={handleSubMenuClose}
          style={{ top: calculateSubMenuTop(4) }}
        >
          <div>
            <Link to="/desert" activeClassName="active">
              desert1
            </Link>
            <Link to="/desert" activeClassName="active">
              desert2
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
