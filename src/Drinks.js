import React from "react";
import Grid from "./Grid";
import { BsCheckLg } from "react-icons/bs";
import Donut1 from "./Popular/popular_food_images/donut/baked_black_sesame_mochi.jpg";
import Donut2 from "./Popular/popular_food_images/donut/baked_matcha_glazed.jpg";
import Donut3 from "./Popular/popular_food_images/donut/baked_vanilla.jpg";
import Donut4 from "./Popular/popular_food_images/donut/vanilla_bean_and_rose.jpg";
import Donut5 from "./Popular/popular_food_images/donut/vegan_triple_chocolate.jpg";
import Donut6 from "./Popular/popular_food_images/donut/vegan_turmeric_lemon_coconut.jpg";
import Donut7 from "./Popular/popular_food_images/donut/baked_maple.jpg";

const Drinks = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  const donutArray = [
    {
      id: 1,
      price: "Rs 35000",
      description: "baked_black_sesame_mochi",
      image: Donut1,
    },
    {
      id: 2,
      price: "Rs 28000",
      description: "baked_matcha_glazed",
      image: Donut2,
    },
    {
      id: 3,
      price: "Rs 15000",
      description: "baked_vanilla",
      image: Donut3,
    },
    {
      id: 4,
      price: "Rs 25000",
      description: "vanilla_bean_and_rose",
      image: Donut4,
    },
    {
      id: 5,
      price: "Rs 33000",
      description: "vegan_triple_chocolate",
      image: Donut5,
    },
    {
      id: 6,
      price: "Rs 28000",
      description: "vegan_turmeric_lemon_coconut",
      image: Donut6,
    },
    {
      id: 7,
      price: "Rs 25000",
      description: "baked_maple",
      image: Donut7,
    },
  ];
  return (
    <div>
      <h1>Welcome to the Drinks Page</h1>
      <p>This is the content of the Drinks page.</p>
      <Grid items={donutArray} />
    </div>
  );
};

export default Drinks;
