import React, { useState } from "react";
import AvailableSneakers from "./AvailableSneakers";
// import CartContext from "../store/Cart-context";
import classes from "./Sneakers.module.css";
import SneakersForm from "./SneakersForm";

const Sneakers = (props) => {
  const [selectedShoe, setSelectedShoe] = useState("s1");

  const changeShoe = (id) => {
    setSelectedShoe(id);
    console.log(id);
  };

  return (
    <section className={classes.sneakers}>
      <AvailableSneakers
        selectedShoe={selectedShoe}
        setSelectedShoe={setSelectedShoe}
        changeShoe={changeShoe}
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
        <SneakersForm
          number={props.number}
          addShoe={props.addShoe}
          removeShoe={props.removeShoe}
        />
      </div>
    </section>
  );
};

export default Sneakers;
