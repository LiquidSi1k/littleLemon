import React from "react";
import { restaurant, mario } from "../constants/assets";

const History = () => {
  return (
    <section className="history-section flex-col">
      <div>
        <h1>Little Lemon</h1>
        <h1>Chicago</h1>
        <p>
          Nestled in the heart of Chicago, Little Lemon Chicago started as a
          popular food truck in 2010, thanks to Maria and Alex, two childhood
          friends from Greece. Their dream was to share Mediterranean-inspired
          dishes with a local twist. After the truck’s success, they opened a
          cozy restaurant in 2015, adorned with lemon-themed décor to honor
          their roots. Known for its zesty lemon chicken and vibrant atmosphere,
          Little Lemon quickly became a neighborhood favorite. Today, it
          continues to delight diners with its fresh flavors and warm, inviting
          ambiance, reflecting a blend of tradition and innovation.
        </p>
      </div>
      <div className="history-img">
        <img src={restaurant} alt="restaurant" height={200} width={200} />
        <img src={mario} alt="mario" height={200} width={250} />
      </div>
    </section>
  );
};

export default History;
