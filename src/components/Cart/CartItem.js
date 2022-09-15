import React from "react";
import classes from "./Cart.module.css";
import { FaTrash } from "react-icons/fa";

const CartItem = (props) => {
  return (
    <li className={classes["cart-content"]}>
      <div>{props.image}</div>
      <div>
        <div className={classes.summary}>
          {props.name}
          <div className={classes.prices}>
            <span>${props.price}</span>
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
