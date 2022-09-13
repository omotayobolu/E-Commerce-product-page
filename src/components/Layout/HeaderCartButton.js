import React from "react";
import CartIcon from "../../assets/icon-cart.svg";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <div className={classes.CartIcon}>
      <img onClick={props.onClick} src={CartIcon} alt="" />
      <div className={classes["cart-number"]}>1</div>
    </div>
  );
};

export default HeaderCartButton;
