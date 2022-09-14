import React, { useContext } from "react";

import CartItem from "./CartItem";
import CartModal from "../UI/CartModal";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
  const hasItems = CartCtx.items.length > 0;

  const CartItemRemoveHandler = (id) => {
    CartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={CartItemRemoveHandler.bind(null, item.id)}
          totalAmount={totalAmount}
        />
      ))}
    </ul>
  );
  return (
    <CartModal onClose={props.onClose}>
      <h3 className={classes["cart-header"]}>Cart</h3>
      <hr />
      {hasItems ? (
        <div className={classes.content}>
          {cartItems}
          <div className={classes.action}>
            <button className={classes.checkout} onClick={props.onClose}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className={classes.empty}>Your cart is empty.</p>
      )}
    </CartModal>
  );
};

export default Cart;
