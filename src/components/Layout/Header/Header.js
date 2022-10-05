import React from "react";

import mealImg from "../../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>InTheMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImg} alt="my-meal" />
      </div>
    </>
  );
};

export default Header;
