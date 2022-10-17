import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  // Input Data
  const nameInp = useRef();
  const streetInp = useRef();
  const postalInp = useRef();
  const cityInp = useRef();

  //   Data Status
  const [dataOk, setDataOk] = useState({
    nameOk: true,
    streetOk: true,
    postalOk: true,
    cityOk: true,
  });

  //   Condition Func
  const isEmpty = (val) => val.trim() !== "";
  const isFiveChars = (val) => val.trim().length >= 5;

  // Submit Handler
  const confirmHandler = (event) => {
    event.preventDefault();

    const valName = nameInp.current.value;
    const valStreet = streetInp.current.value;
    const valPostal = postalInp.current.value;
    const valCity = cityInp.current.value;

    // Stage: validate
    setDataOk({
      nameOk: isEmpty(valName),
      streetOk: isEmpty(valStreet),
      postalOk: isFiveChars(valPostal),
      cityOk: isEmpty(valCity),
    });
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInp} />
        {!dataOk.nameOk && <p>Invalid Name</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInp} />
        {!dataOk.streetOk && <p>Invalid Street</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInp} />
        {!dataOk.postalOk && <p>Invalid Postal</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInp} />
        {!dataOk.cityOk && <p>Invalid City</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
