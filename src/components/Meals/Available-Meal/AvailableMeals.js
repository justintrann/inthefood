import React, { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import MealItem from "../Meal-item/MealItem";
import styles from "./AvailableMeals.module.css";
import { API_URL } from "../../../helper/helperUrl";
import axios from "axios";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [dataMeals, setDataMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(1);
  const [errorValue, setErrorValue] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const data = Object.keys(res.data).map((key) => {
          return { id: key, ...res.data[key] };
        });
        setDataMeals(data);
        setIsLoading(0);
      })
      .catch((err) => {
        setErrorValue("Something went wrong ... " + err.code);
        setIsLoading(0);
      });
  }, []);
  if (isLoading) return <p className={styles.loading}>Loading ....</p>;
  if (!isLoading && errorValue !== "")
    return <p className={styles.loading}>{errorValue}</p>;

  // else return <p className={styles.loading}>Loading ....</p>;

  const mealLists = dataMeals.map((meal) => (
    <MealItem key={meal.id} {...meal} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealLists}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
