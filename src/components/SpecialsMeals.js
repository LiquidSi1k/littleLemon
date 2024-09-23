import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { MdDeliveryDining } from "react-icons/md";

const SpecialsMeals = ({ type }) => {
  const { menu } = useContext(DataContext);

  const generateRandomPrice = (min = 10, max = 20) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  if (!menu || menu.length === 0) {
    return <p>No dishes available at the moment.</p>;
  }

  const filteredData = menu.filter((dish) => dish.mealType.includes(type));

  return (
    <div className="specials-container">
      {(filteredData.length > 0 ? filteredData : menu)
        .slice(0, 10)
        .map((dish) => (
          <div className="specials-section " key={dish.name}>
            <img
              src={dish.image}
              height={100}
              width={100}
              alt={dish.name || "food"}
            />
            <div className="specials-info">
              <h4>{dish.name}</h4>
              <p>${dish.price || generateRandomPrice()}</p>
              <p>
                {dish.cuisine} {dish.mealType.join(" / ")} made with{" "}
                {dish.ingredients.slice(0, 4).join(", ")} &nbsp;
              </p>

              <div className="specials-delivery">
                <span>Order a delivery</span>
                <MdDeliveryDining />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SpecialsMeals;
