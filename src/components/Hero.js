import React from "react";
import Button from "./ui/Button";
import { foods } from "../constants/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Little Lemon</h1>
      <h1>Chicago</h1>
      <div className="flex">
        <p>
          Experience the zesty flavors of Little Lemon with fresh,
          lemon-inspired dishes and local ingredients, all served in a warm,
          inviting atmosphere!
        </p>
        <img src={foods} alt="foods" />
      </div>
      <Button type="yellow" width={200}>
        <Link className="list-none" to="/booking">
          Reserve a Table
        </Link>
      </Button>
    </section>
  );
};

export default Hero;
