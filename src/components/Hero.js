import React from "react";
import Button from "./ui/Button";
import { foods } from "../constants/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="flex">
        <div>
          <h1>Little Lemon</h1>
          <h1>Chicago</h1>
          <p>
            Experience the zesty flavors of Little Lemon with fresh,
            lemon-inspired dishes and local ingredients, all served in a warm,
            inviting atmosphere!
          </p>
          <Button type="yellow" width={200}>
            <Link className="list-none" to="/booking">
              Reserve a Table
            </Link>
          </Button>
        </div>
        <img src={foods} alt="foods" />
      </div>
    </section>
  );
};

export default Hero;
