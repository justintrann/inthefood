import React, { useContext, useEffect, useState } from "react";
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
  // animation bump
  const [isBump, setIsBump] = useState(0);
  const animationClass = `${styles.button} ${isBump && styles.bump}`;

  useEffect(() => {
    if (cartData.items.length === 0) return;
    setIsBump(1);
    const timer = setTimeout(() => {
      setIsBump(0);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartData.items]);

  // JSX
  return (
    <button className={animationClass}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartQty}</span>
    </button>
  );
};

export default HeaderCartButton;
