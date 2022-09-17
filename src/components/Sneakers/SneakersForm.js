import { useRef, useState } from "react";
import Plus from "../../assets/icon-plus.svg";
import Minus from "../../assets/icon-minus.svg";
import CartIcon from "../../assets/icon-cart.svg";

import classes from "./SneakersForm.module.css";

const SneakersForm = (props) => {
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

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.cart} onSubmit={submitHandler}>
      <div className={classes.cart1}>
        <img
          onClick={props.removeShoe}
          className={props.number === 0 ? classes.removeDisabled : ""}
          src={Minus}
          alt=""
        />
        <input
          id="amount"
          ref={amountInputRef}
          value={props.number}
          onChange={(e) => e.target.value}
        />
        <img onClick={props.addShoe} src={Plus} alt="" />
      </div>
      <button className={classes["add-to-cart"]}>
        <img src={CartIcon} alt="" />
        Add to Cart
      </button>
      {!amountIsValid && (
        <span className={classes.addError}>
          Please enter a valid amount (1-10)
        </span>
      )}
    </form>
  );
};

export default SneakersForm;
