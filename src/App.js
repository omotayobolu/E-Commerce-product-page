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

  const addShoe = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const removeShoe = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div className="App">
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header number={number} onShowCart={showCartHandler} />
      <Sneakers number={number} addShoe={addShoe} removeShoe={removeShoe} />
    </div>
  );
};

export default App;
