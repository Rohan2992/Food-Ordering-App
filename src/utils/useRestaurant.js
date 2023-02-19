import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../Config";

export const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState("");

  useEffect(() => {
    getRestauarantInfo();
  }, []);

  async function getRestauarantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setTimeout(() => {
      setRestaurant(json.data);
    }, 1000);
    // console.log(json.data);
  }

  return restaurant;
};
