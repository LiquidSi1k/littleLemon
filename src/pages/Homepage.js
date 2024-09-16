import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Reviews from "../components/Reviews";
import History from "../components/History";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Reviews />
      <History />
    </>
  );
};

export default Homepage;
