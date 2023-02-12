import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../Config";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState("");
  console.log(id);

  useEffect(() => {
    getRestauarantInfo();
  }, []);

  async function getRestauarantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.6320535&lng=77.44581509999999&menuId=" +
        id
    );
    const json = await data.json();
    setTimeout(() => {
      setRestaurant(json.data);
    }, 1000);
    // console.log(json.data);
  }

  const { cloudinaryImageId, name, avgRating, costForTwoMsg } = restaurant;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant.jpg" />
        <ul>
          <li>{name}</li>
          <li>{avgRating}</li>
          <li>{costForTwoMsg}</li>
        </ul>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items)?.map((menu, i) => (
            <li key={i}>{menu?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
