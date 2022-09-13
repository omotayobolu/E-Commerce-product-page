import React from "react";
import Plus from "../../assets/icon-plus.svg";
import Minus from "../../assets/icon-minus.svg";
import CartIcon from "../../assets/icon-cart.svg";

import classes from "./SneakersForm.module.css";

const SneakersForm = (props) => {
  return (
    <form className={classes.cart}>
      <div className={classes.cart1}>
        <img
          onClick={props.removeShoe}
          className={props.number === 0 ? classes.removeDisabled : ""}
          src={Minus}
          alt=""
        />
        <input value={props.number} />
        <img onClick={props.addShoe} src={Plus} alt="" />
      </div>
      <button className={classes["add-to-cart"]}>
        <img src={CartIcon} alt="" />
        Add to Cart
      </button>
    </form>
  );
};

export default SneakersForm;
