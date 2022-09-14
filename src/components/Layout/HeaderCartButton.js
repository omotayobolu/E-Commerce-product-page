import React, { useContext } from "react";
import CartIcon from "../../assets/icon-cart.svg";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);

  const numberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={classes.CartIcon}>
      <img onClick={props.onClick} src={CartIcon} alt="" />
      <div className={classes["cart-number"]}>{numberOfCartItems}</div>
    </div>
  );
};

export default HeaderCartButton;
