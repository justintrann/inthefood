import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../storing/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  // Get Data
  const cartData = useContext(CartContext);
  // func
  const onAddHandler = (items) => {
    cartData.addItem({ ...items, amount: 1 });
  };
  const onRemoveHandler = (id) => {
    cartData.removeItem(id);
  };

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

  const checkoutShowHandler = () => {
    setIsCheckout(1);
  };

  useEffect(() => {
    console.log(cartData);
    return () => {
      console.log("Unmount");
    };
  });

  const modalButton = (checkoutShowHandler) => (
    <div className={styles.actions}>
      <button onClick={props.onHideCart} className={styles["button--alt"]}>
        Close
      </button>
      {cartData.items.length > 0 && (
        <button className={styles.button} onClick={checkoutShowHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total: </span>
        <span>{cartData.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onHideCart} />}
      {!isCheckout && modalButton(checkoutShowHandler)}
    </Modal>
  );
};

export default Cart;
