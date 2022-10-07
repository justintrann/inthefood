import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialCart = {
  items: [],
  totalAmount: 0,
};

const cartReducerFunc = (state, action) => {
  if (action.type === "ADD_CART") {
    const updatedItems = state.items.concat(action.items);
    const updatedTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  console.log(initialCart);
  return initialCart;
};
const CartProvider = (props) => {
  // Info cart through useReducer
  const [cartState, dispatchCartAction] = useReducer(
    cartReducerFunc,
    initialCart
  );

  // Func
  const addToCartHandler = (val) => {
    dispatchCartAction({ type: "ADD_CART", items: val });
  };
  const removeFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART", id: id });
  };

  //   Initial Data
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
