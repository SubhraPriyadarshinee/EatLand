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
import { FaBeer, FaHotjar, FaCocktail } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import {
  GiChickenOven,
  GiSadCrab,
  GiPopcorn,
  GiBoba,
  GiWineBottle,
  GiHamburger,
  GiSandwich,
  GiFruitBowl,
  GiIceCreamCone,
  GiCupcake,
  GiCakeSlice,
  GiDonut,
} from "react-icons/gi";
import { CiBowlNoodles, CiPizza, CiFries } from "react-icons/ci";
import { LuCupSoda, LuIceCream2, LuSandwich, LuSalad } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";

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

  function navToLatest(oEvent) {
    console.log("flames icon clicked");
  }

  const calculateSubMenuTop = (index) => {
    const sidebarLink = document.querySelector(`#link-${index}`);
    const sidebarLinkRect = sidebarLink.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return sidebarLinkRect.top + scrollTop;
  };

  return (
    <div className="sidebar">
      <Link to="/latest" className="sidebar_flames_link" >
        <FaHotjar className="flames_icon" />
      </Link>
      <Link
        to="/"
        id="link-1"
        className={`sidebar-link ${activeSubMenu === 1 ? "active" : ""}`}
        onMouseEnter={() => handleSubMenuToggle(1)}
        onMouseLeave={handleSubMenuClose}
      >
        <IoFastFoodOutline className="sidebarIcon io_strokeWidth " />
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
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiChickenOven className="submenuIcon" />
                <div className="submenu_item_name">Chicken</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiSadCrab className="submenuIcon" />
                <div className="submenu_item_name">SeaFood</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <CiPizza className="submenuIcon" />
                <div className="submenu_item_name">Pizza</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <CiBowlNoodles className="submenuIcon" />
                <div className="submenu_item_name">Pasta</div>
              </div>
            </Link>
          </div>
        </div>
      )}

      <Link
        to="/"
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
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiBoba className="submenuIcon" />
                <div className="submenu_item_name">Boba</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <SiBuymeacoffee className="submenuIcon" />
                <div className="submenu_item_name">Cold Coffee</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <FaCocktail className="submenuIcon" />
                <div className="submenu_item_name">Cocktail</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiWineBottle className="submenuIcon" />
                <div className="submenu_item_name">Wine</div>
              </div>
            </Link>
          </div>
        </div>
      )}

      <Link
        to="/"
        id="link-3"
        className={`sidebar-link ${activeSubMenu === 3 ? "active" : ""}`}
        onMouseEnter={() => handleSubMenuToggle(3)}
        onMouseLeave={handleSubMenuClose}
      >
        <LuSandwich className="sidebarIcon" />
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
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiHamburger className="submenuIcon" />
                <div className="submenu_item_name">Burger</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiSandwich className="submenuIcon" />
                <div className="submenu_item_name">Sandwich</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <CiFries className="submenuIcon" />
                <div className="submenu_item_name">Fries</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiFruitBowl className="submenuIcon" />
                <div className="submenu_item_name">Fruit Bowl</div>
              </div>
            </Link>
          </div>
        </div>
      )}

      <Link
        to="/"
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
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiDonut className="submenuIcon" />
                <div className="submenu_item_name">Donut</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiCakeSlice className="submenuIcon" />
                <div className="submenu_item_name">Cake Slice</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiCupcake className="submenuIcon" />
                <div className="submenu_item_name">Cup Cake</div>
              </div>
            </Link>
            <Link to="/" activeClassName="active">
              <div className="submenu_item">
                <GiIceCreamCone className="submenuIcon" />
                <div className="submenu_item_name">Ice Cream</div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
