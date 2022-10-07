import React, { useContext, useEffect } from "react";
import CartContext from "../../storing/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";
const Cart = (props) => {
  // Get Data
  const cartData = useContext(CartContext);
  // func
  const onAddHandler = (items) => {};
  const onRemoveHandler = (id) => {};

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartData.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  useEffect(() => {
    console.log(cartData);
    return () => {
      console.log("Unmount");
    };
  });
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total: </span>
        <span>{cartData.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          Close
        </button>
        {cartData.items.length > 0 && (
          <button className={styles.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
