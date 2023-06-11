import React from 'react';
import { LuChevronUp, LuChevronDown, LuSave } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineRight ,AiFillCreditCard} from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";
import { MdOutlineHistoryEdu } from "react-icons/md";





const Header = () => {
  return (
    <div className="content_newOrder">
      <div className="content_iconTabBar" >
          <div className="itb_btn" >
            <AiFillCreditCard className="itb_btn_icon" />
            <p className="itb_btn_text" >Payment</p>
          </div>
          <div className="itb_btn" >
            <FaAddressBook className="itb_btn_icon" />
            <p className="itb_btn_text" >Address</p>
          </div>
          <div className="itb_btn" >
            <MdOutlineHistoryEdu className="itb_btn_icon" />
            <p className="itb_btn_text" >History</p>
          </div>
        </div>
      <div className="newOrderListHeader">
        <p className="newOrderTitle">New Order</p>
        <p className="newOrderDate">Sunday, October 18 2018</p>
      </div>

      <div className="newOrderList">
        <div className="newOrderListIconDiv">
          <RiDeleteBin5Line className="deleteIcon" />
        </div>
        <div className="newOrderListDesciption">
          <p className="newOrderDishName">Pasta in Tomato Sauce</p>
          <p className="newOrderDishPrice">@ 23.000</p>
        </div>
        <div className="newOrderListIterator">
          <div className="iterator_main_div">
            <div className="iterator_number">
              <input value="2" className="iterator_input" />
            </div>
            <div className="iterator_up_down">
              {/* <div className="iterator_up" > */}
              <LuChevronUp color="white" />
              {/* </div> */}
              {/* <div className="iterator_down" > */}
              <LuChevronDown color="white" />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="newOrderListTotalPrice">
          <p className="newOrderTotalPrice">46.000</p>
        </div>
      </div>
      <div className="newOrderList">
        <div className="newOrderListIconDiv">
          <RiDeleteBin5Line className="deleteIcon" />
        </div>
        <div className="newOrderListDesciption">
          <p className="newOrderDishName">Ice Milo</p>
          <p className="newOrderDishPrice">@ 18.000</p>
        </div>
        <div className="newOrderListIterator">
          <div className="iterator_main_div">
            <div className="iterator_number">
              <input value="1" className="iterator_input" />
            </div>
            <div className="iterator_up_down">
              {/* <div className="iterator_up" > */}
              <LuChevronUp color="white" />
              {/* </div> */}
              {/* <div className="iterator_down" > */}
              <LuChevronDown color="white" />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="newOrderListTotalPrice">
          <p className="newOrderTotalPrice">18.000</p>
        </div>
      </div>
      <div className="newOrderList">
        <div className="newOrderListIconDiv">
          <RiDeleteBin5Line className="deleteIcon" />
        </div>
        <div className="newOrderListDesciption">
          <p className="newOrderDishName">Onion Ring</p>
          <p className="newOrderDishPrice">@ 20.000</p>
        </div>
        <div className="newOrderListIterator">
          <div className="iterator_main_div">
            <div className="iterator_number">
              <input value="1" className="iterator_input" />
            </div>
            <div className="iterator_up_down">
              {/* <div className="iterator_up" > */}
              <LuChevronUp color="white" />
              {/* </div> */}
              {/* <div className="iterator_down" > */}
              <LuChevronDown color="white" />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="newOrderListTotalPrice">
          <p className="newOrderTotalPrice">20.000</p>
        </div>
      </div>
      <div className="newOrderList">
        <div className="newOrderListIconDiv">
          <RiDeleteBin5Line className="deleteIcon" />
        </div>
        <div className="newOrderListDesciption">
          <p className="newOrderDishName">French Fries</p>
          <p className="newOrderDishPrice">@ 15.000</p>
        </div>
        <div className="newOrderListIterator">
          <div className="iterator_main_div">
            <div className="iterator_number">
              <input value="2" className="iterator_input" />
            </div>
            <div className="iterator_up_down">
              {/* <div className="iterator_up" > */}
              <LuChevronUp color="white" />
              {/* </div> */}
              {/* <div className="iterator_down" > */}
              <LuChevronDown color="white" />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="newOrderListTotalPrice">
          <p className="newOrderTotalPrice">30.000</p>
        </div>
      </div>

      <div className="newOrderListWhite" >
        <div className="newOrderListSubtotal" >
          <p className="no_subtotal" >Subtotal</p>
          <p className="no_subtotalPrice" >114.000</p>
        </div>
        <div className="newOrderListDiscount">
          <p className="no_discount" >Discount</p>
          <p className="no_discountPrice" >20%</p>
        </div>
        <div className="newOrderListGst">
          <p className="no_gst" >GST</p>
          <p className="no_gstPrice" >7%</p>
        </div>
        <div className="newOrderListTotal">
          <p className="no_total" >Total</p>
          <p className="no_totalPrice" >97.584</p>
        </div>
        <div className="newOrderListButtons">
          <div className="no_saveButton" >
            <LuSave className="no_saveBtn_icon" />
            <p className="no_saveBtn_text" >Save</p>
          </div>

          <div className="no_payNowButton" >
            <GiMoneyStack className="no_payNowBtn_icon" />
            <p className="no_payNowBtn_text" >Pay Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;