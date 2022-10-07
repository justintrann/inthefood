import React, { forwardRef } from "react";
import styles from "./Input.module.css";
const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.info.id}>{props.label}</label>
      <input ref={ref} {...props.info} />
    </div>
  );
});

export default Input;
