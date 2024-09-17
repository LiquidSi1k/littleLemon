import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const SpecialsMeals = ({ type }) => {
  const { menu } = useContext(DataContext);

  const filteredData = menu.filter((dish) => dish.mealType.includes(type));

  return (
    <>
      {(filteredData.length > 0 ? filteredData : menu)
        .slice(0, 10)
        .map((dish) => (
          <div className="specials-section" key={dish.name}>
            <div>
              <h4>{dish.name}</h4>
              <p>
                {dish.cuisine} {dish.mealType[0]}{" "}
                {dish.mealType[1] ? ` / ${dish.mealType[1]}` : ""} made with{" "}
                {dish.ingredients.slice(0, 4)} &nbsp;
              </p>
              <p>$12.99</p>
            </div>
            <img src={dish.image} height={100} width={100} alt="food" />
          </div>
        ))}
    </>
  );
};

export default SpecialsMeals;
