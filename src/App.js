import React, { useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./storing/cart-context";
import CartProvider from "./storing/CartProvider";

const App = () => {
  // Show-hide Cart
  const [cartFlag, setCartFlag] = useState(0);
  const showCartHanler = () => setCartFlag(1);
  const hideCartHandler = () => setCartFlag(0);

  // Data Cart Context
  return (
    <CartProvider>
      {cartFlag && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHanler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
