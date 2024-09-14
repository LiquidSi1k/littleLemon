import React from "react";
import Button from "./ui/Button";
import { foods } from "../constants/assets";

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Little Lemon</h1>
      <h1>Sydney</h1>
      <div className="flex">
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <img src={foods} alt="foods" />
      </div>
      <Button type="yellow" width={200}>
        Reserve a Table
      </Button>
    </section>
  );
};

export default Hero;
