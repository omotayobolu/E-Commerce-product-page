import React from "react";

import Logo from "../../assets/logo.svg";
import CartIcon from "../../assets/icon-cart.svg";
import HeaderAvatar from "../../assets/image-avatar.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.heading}>
      <div className={classes.headingContent}>
        <img src={Logo} alt="" />
        <ul className={classes["nav-items"]}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={classes.headingContent2}>
        <div className={classes.CartIcon}>
          <img onClick={props.onShowCart} src={CartIcon} alt="" />
          {props.number !== 0 && (
            <div className={classes["cart-number"]}>{props.number}</div>
          )}
        </div>
        <img src={HeaderAvatar} alt="" />
      </div>
    </header>
  );
};

export default Header;
