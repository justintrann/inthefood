import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemAdd from "./MealItemAdd";
import CartContext from "../../../storing/cart-context";

const MealItem = (props) => {
  const cartData = useContext(CartContext);
  const onAddCartHandler = (amount) =>
    cartData.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    });

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemAdd onAddCartHandler={onAddCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
