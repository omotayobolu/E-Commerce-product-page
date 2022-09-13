import React from "react";

import Logo from "../../assets/logo.svg";
import HeaderAvatar from "../../assets/image-avatar.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

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
        <HeaderCartButton onClick={props.onShowCart} />
        <img src={HeaderAvatar} alt="" />
      </div>
    </header>
  );
};

export default Header;
