import React, { useContext } from "react";
import CartContext from "../../../storing/cart-context";
import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  // data
  const cartData = useContext(CartContext);
  const cartQty = cartData.items.reduce(
    (currNumber, val) => currNumber + val.amount,
    0
  );
  // JSX
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartQty}</span>
    </button>
  );
};

export default HeaderCartButton;
