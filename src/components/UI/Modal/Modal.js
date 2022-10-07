import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Overlay = (props) => {
  return (
    <>
      <div onClick={props.onHideCart} className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div>{props.children}</div>
      </div>
    </>
  );
};

const Modal = (props) =>
  ReactDOM.createPortal(
    <Overlay onHideCart={props.onHideCart}>{props.children}</Overlay>,
    document.querySelector("#overlay")
  );
export default Modal;
