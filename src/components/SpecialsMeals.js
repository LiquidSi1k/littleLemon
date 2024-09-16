import React, { useEffect, useState } from "react";

const SpecialsMeals = ({ type }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/recipes?sortBy=name&order=asc"
      );
      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }
      const result = await response.json();
      setData(result.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((dish) => dish.mealType.includes(type));

  return (
    <>
      {(filteredData.length > 0 ? filteredData : data)
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
