import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Sneakers from "./components/Sneakers/Sneakers";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Sneakers />
    </div>
  );
};

export default App;
