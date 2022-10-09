import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialCart = {
  items: [],
  totalAmount: 0,
};

const cartReducerFunc = (state, action) => {
  if (action.type === "ADD_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;
    const availItemsIndex = state.items.findIndex(
      (val) => val.id === action.items.id
    );

    let newAddItem;
    let updatedData;

    const availItems = state.items[availItemsIndex];
    //FIND Ìf available in our data
    if (availItems) {
      newAddItem = {
        ...availItems,
        amount: availItems.amount + action.items.amount,
      };
      updatedData = [...state.items];
      updatedData[availItemsIndex] = newAddItem;
    } else {
      // add new to our current Data
      updatedData = state.items.concat(action.items);
    }

    return {
      items: updatedData,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_CART") {
    const availItemsIndex = state.items.findIndex(
      (val) => val.id === action.id
    );
    const availItems = state.items[availItemsIndex];
    const updatedTotalAmount = state.totalAmount - availItems.price;
    let updatedData = [...state.items];
    if (availItems.amount === 1) {
      const tmpData = state.items.filter((val) => val.id !== action.id);
      updatedData = tmpData;
    } else {
      const currItem = { ...availItems, amount: availItems.amount - 1 };
      updatedData[availItemsIndex] = currItem;
    }
    return {
      items: updatedData,
      totalAmount: updatedTotalAmount,
    };
  }

  // Final
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
