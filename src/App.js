import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Sneakers from "./components/Sneakers/Sneakers";
import CartProvider from "./store/CartProvider";

const App = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [number, setNumber] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.addEventListener("resize", changeWidth);
    };
  }, []);

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
      <CartProvider>
        {showCart && <Cart onClose={hideCartHandler} />}
        <Header
          toggleMenu={toggleMenu}
          toggleNav={toggleNav}
          screenWidth={screenWidth}
          number={number}
          onShowCart={showCartHandler}
        />
        <Sneakers
          screenWidth={screenWidth}
          onShowCart={showCartHandler}
          number={number}
          addShoe={addShoe}
          removeShoe={removeShoe}
        />
      </CartProvider>
    </div>
  );
};

export default App;
