import React, { useContext } from "react";

import HeaderCartButton from "./HeaderCartButton";

import mealImg from "../../../assets/meals.jpg";
import styles from "./Header.module.css";
const Header = (props) => {
  // const cartData = useContext(CartContext);

  // console.log(props.cartData);
  return (
    <>
      <header className={styles.header}>
        <h1>InTheMeals</h1>
        <div onClick={props.onShowCart}>
          <HeaderCartButton />
        </div>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImg} alt="my-meal" />
      </div>
    </>
  );
};

export default Header;
