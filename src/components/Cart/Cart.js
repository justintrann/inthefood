import React, { useContext } from "react";
import CartContext from "../../storing/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
const Cart = (props) => {
  // Get Data
  const cartData = useContext(CartContext);
  // func
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", qty: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total: </span>
        <span>{cartData.totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
