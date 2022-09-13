import React from "react";

import CartModal from "../UI/CartModal";
// import CartClose from "../../assets/icon-close.svg";
import { FaTrash } from "react-icons/fa";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {" "}
      {[
        {
          id: "c1",
          name: "Fall Limited Sneakers Edition",
          amount: 3,
          price: 125,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <CartModal onClose={props.onClose}>
      <h3 className={classes["cart-header"]}>Cart</h3>
      {/* <img
        className={classes["hide-cart"]}
        onClick={props.onHideCart}
        src={CartClose}
        alt=""
      /> */}
      <hr />
      <div className={classes.content}>
        <div>
          {cartItems}
          <span>375</span>
          <FaTrash />
        </div>
        <div className={classes.action}>
          <button className={classes.checkout} onClick={props.onClose}>
            Checkout
          </button>
        </div>
      </div>
      {/* <p>Your cart is empty.</p> */}
      {/* <button onClick={props.onHideCart}>Checkout</button>  */}
      {/* only displays when there's an item in cart */}
    </CartModal>
  );
};

export default Cart;
