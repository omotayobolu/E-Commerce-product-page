import React, { useState, useContext, useRef } from "react";
import SneakersAvailable from "../data/SneakersAvailable";
import CartContext from "../../store/cart-context";
import classes from "./Sneakers.module.css";
import SneakersForm from "./SneakersForm";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

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

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
    }

    addToCartHandler(enteredAmountNumber);
  };

  return (
    <form className={classes.sneakers} onSubmit={submitHandler}>
      <section>
        {props.screenWidth <= 1024 ? (
          <div className={classes["shoe-mobile"]}>
            <Splide
              options={{
                perPage: 1,
                arrows: true,
                pagination: false,
                drag: false,
                width: "100%",
              }}
            >
              {SneakersAvailable.map((item) => {
                return (
                  <SplideSlide key={item.id}>
                    <div className={classes.slideShoe}>{item.shoe}</div>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        ) : (
          <div className={classes.shoeSection}>
            {SneakersAvailable.map((shoe) => {
              return (
                <div
                  key={shoe.id}
                  onClick={() => changeShoe(shoe.id)}
                  className={classes.displayedShoes}
                >
                  <div>
                    <div
                      className={
                        selectedShoe === shoe.id
                          ? classes.thumbnailActive
                          : classes.thumbnails
                      }
                    >
                      {shoe.shoeThumbnail}
                    </div>
                  </div>
                  <div className={classes.shoeImage}>
                    {selectedShoe === shoe.id ? shoe.shoe : ""}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

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
            <h2>${SHOES.price}.00</h2>
            <h3>$250.00</h3>
          </div>
          <h3>50%</h3>
        </div>
        <SneakersForm
          number={props.number}
          addShoe={props.addShoe}
          removeShoe={props.removeShoe}
          amountIsValid={amountIsValid}
          amountInputRef={amountInputRef}
        />
      </div>
    </form>
  );
};

export default Sneakers;
