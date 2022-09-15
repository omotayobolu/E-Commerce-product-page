// import React, { useState } from "react";

import Logo from "../../assets/logo.svg";
import HeaderAvatar from "../../assets/image-avatar.png";
// import IconClose from "../../assets/icon-close.svg";
// import IconMenu from "../../assets/icon-menu.svg";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };

  return (
    <header className={classes.heading}>
      <div className={classes.headingContent}>
        {/* <button>
          <img src={IconMenu} alt="" />
        </button> */}
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
