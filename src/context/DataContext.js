import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/recipes?sortBy=name&order=asc"
      );
      if (!response.ok) {
        throw new Error("Unable to fetch data for Menu");
      }
      const result = await response.json();
      setMenu(result.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <DataContext.Provider value={{ menu }}>{children}</DataContext.Provider>
  );
};
