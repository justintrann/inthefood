import React from "react";
import styles from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.info.id}>{props.label}</label>
      <input {...props.info} />
    </div>
  );
};

export default Input;
