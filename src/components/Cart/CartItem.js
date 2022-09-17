import React from "react";
import classes from "./Cart.module.css";
import CartImage from "../../assets/image-product-1-thumbnail.jpg";
import { FaTrash } from "react-icons/fa";

const CartItem = (props) => {
  return (
    <li className={classes["cart-content"]}>
      <img className={classes["cart-image"]} src={CartImage} alt="" />
      <div>
        <div className={classes.summary}>
          {props.name}
          <div className={classes.prices}>
            <span>${props.price}.00</span>
            <span> x {props.amount}</span>
            <span> {props.totalAmount}</span>
          </div>
        </div>
      </div>
      <FaTrash style={{ cursor: "pointer" }} onClick={props.onRemove} />
    </li>
  );
};

export default CartItem;
