import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./SideNav.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onToggleNav} />;
};

const NavOverlay = (props) => {
  return (
    <div className={classes.nav}>
      <div className={classes["nav-content"]}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const SideNav = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onToggleNav={props.onToggleNav} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <NavOverlay>{props.children}</NavOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default SideNav;
