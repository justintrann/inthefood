import React, { useContext, useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./MealItemAdd.module.css";

const MealItemAdd = (props) => {
  const [isValidInput, setIsValidInput] = useState(1);
  const amountInputRef = useRef();

  const addItemHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;
    // Check valid
    if (enteredAmount < 1 || enteredAmount > 5) {
      setIsValidInput(0);
      return;
    }
    // FINAL: push-add NEW data, cannot use context here because only input of number
    // So we do a function normally from props (of MealItems)
    props.onAddCartHandler(enteredAmount);
  };
  const inputInfo = {
    id: "amount_" + props.id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };
  return (
    <form onSubmit={addItemHandler} className={styles.form}>
      <Input label="Amount" ref={amountInputRef} info={inputInfo} />
      <button>+ Add this</button>
      {!isValidInput && <p>Invalid amount</p>}
    </form>
  );
};

export default MealItemAdd;
