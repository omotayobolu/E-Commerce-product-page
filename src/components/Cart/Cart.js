import React from "react";

import CartModal from "../UI/CartModal";
import CartClose from "../../assets/icon-close.svg";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <CartModal onClose={props.onHideCart}>
      <h3 className={classes["cart-header"]}>Cart</h3>
      <img
        className={classes["hide-cart"]}
        onClick={props.onHideCart}
        src={CartClose}
        alt=""
      />
      <hr />
      <div className={classes.content}>
        <p>Your cart is empty.</p>
      </div>
      {/* <button onClick={props.onHideCart}>Checkout</button>  */}
      {/* only displays when there's an item in cart */}
    </CartModal>
  );
};

export default Cart;
