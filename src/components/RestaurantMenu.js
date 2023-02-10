import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../Config";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, getRestaurant] = useState(null);
  console.log(id);

  useEffect(() => {
    getRestauarantInfo();
  }, []);

  async function getRestauarantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" +
        id
    );
    const json = await data.json();
    setTimeout(() => {
      getRestaurant(json);
    }, 2000);
    // console.log(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <img
          src={IMG_CDN_URL + restaurant.data.cloudinaryImageId}
          alt="restaurant.jpg"
        />
        <ul>
          <li>{restaurant.data.name}</li>
          <li>{restaurant.data.avgRating}</li>
          <li>{restaurant.data.costForTwoMsg}</li>
        </ul>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant.data.menu.items).map((menu, i) => (
            <li key={i}>{menu.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
