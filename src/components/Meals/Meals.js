import React from "react";
import AvailableMeals from "./AvailableMeal/AvailableMeals";
import MealsIntro from "./MealsIntroduction/MealsIntro";
const Meals = () => {
  return (
    <>
      <MealsIntro />
      <AvailableMeals />
    </>
  );
};

export default Meals;
