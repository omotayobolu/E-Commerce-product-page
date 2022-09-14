import React, { useState, useContext } from "react";
import AvailableSneakers from "./AvailableSneakers";
import CartContext from "../../store/cart-context";
import classes from "./Sneakers.module.css";
import SneakersForm from "./SneakersForm";

const SHOES = {
  name: "Fall Limited Edition Sneakers",
  price: 125.0,
};

const Sneakers = (props) => {
  const CartCtx = useContext(CartContext);

  const [selectedShoe, setSelectedShoe] = useState("s1");

  const changeShoe = (id) => {
    setSelectedShoe(id);
  };

  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: SHOES.name,
      amount: amount,
      price: SHOES.price,
    });
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
        <h1>{SHOES.name}</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className={classes.prices}>
          <div className={classes.ogprice}>
            <h2>${SHOES.price}</h2>
            <h3>$250.00</h3>
          </div>
          <h3>50%</h3>
        </div>
        <SneakersForm
          number={props.number}
          addShoe={props.addShoe}
          removeShoe={props.removeShoe}
          onAddToCart={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Sneakers;
