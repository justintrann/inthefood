import React from "react";
import Input from "../../UI/Input/Input";
import styles from "./MealItemAdd.module.css";

const MealItemAdd = (props) => {
  const inputInfo = {
    id: "amount_" + props.id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };
  return (
    <form className={styles.form}>
      <Input label="Amount" info={inputInfo} />
      <button>+ Add this</button>
    </form>
  );
};

export default MealItemAdd;
