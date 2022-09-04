import React, { useState } from "react";
import AvailableSneakers from "./AvailableSneakers";
import Plus from "../../assets/icon-plus.svg";
import Minus from "../../assets/icon-minus.svg";
import CartIcon from "../../assets/icon-cart.svg";
// import CartContext from "../store/Cart-context";
import classes from "./Sneakers.module.css";
import shoe1 from "../../assets/image-product-1.jpg";

const Sneakers = (props) => {
  const [selectedShoe, setSelectedShoe] = useState(<img src={shoe1} alt="" />);

  return (
    <section className={classes.sneakers}>
      <AvailableSneakers
        selectedShoe={selectedShoe}
        setSelectedShoe={setSelectedShoe}
      />
      <div className={classes["sneakers-content"]}>
        <h4>Sneaker Company</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className={classes.prices}>
          <div className={classes.ogprice}>
            <h2>$125.00</h2>
            <h3>$250.00</h3>
          </div>
          <h3>50%</h3>
        </div>
        <div className={classes.cart}>
          <div className={classes.cart1}>
            <img
              onClick={props.removeShoe}
              className={props.number === 0 ? classes.removeDisabled : ""}
              src={Minus}
              alt=""
            />
            {props.number}
            <img onClick={props.addShoe} src={Plus} alt="" />
          </div>
          <button onClick={props.onShowCart} className={classes["add-to-cart"]}>
            <img src={CartIcon} alt="" />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sneakers;
