import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Sneakers from "./components/Sneakers/Sneakers";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [number, setNumber] = useState(0);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  // const setNoOfCartItemsHandler = () => {
  //   return setNumber(number);
  // };

  const addShoe = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  let removeShoe = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  if (number <= 0) {
    removeShoe = () => setNumber(0);
  }

  return (
    <div className="App">
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header number={number} onShowCart={showCartHandler} />
      <Sneakers
        onShowCart={showCartHandler}
        number={number}
        addShoe={addShoe}
        removeShoe={removeShoe}
      />
    </div>
  );
};

export default App;
