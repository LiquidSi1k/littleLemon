import React, { useState } from "react";
import Button from "./ui/Button";
import SpecialsMeals from "./SpecialsMeals";

const Specials = () => {
  const orderType = ["Lunch", "Mains", "Desserts", "A la Carte"];

  const [selectedType, setSelectedType] = useState("");
  const selectType = (item) => {
    switch (item) {
      case "Mains":
        setSelectedType("Dinner");
        break;
      case "Desserts":
        setSelectedType("Dessert");
        break;
      case "A la Carte":
        setSelectedType("Beverage");
        break;
      default:
        setSelectedType(item);
    }
  };

  return (
    <section className="pad-20 specials " id="menu">
      <h3>ORDER FOR DELIVERY!</h3>
      <div className="py-20 flex">
        {orderType.map((item) => (
          <Button key={item} type="white" onClick={() => selectType(item)}>
            {item}
          </Button>
        ))}
      </div>
      <SpecialsMeals type={selectedType} />
    </section>
  );
};

export default Specials;
