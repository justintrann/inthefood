import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
        {/* <Cart /> */}
      </main>
    </>
  );
};

export default App;
