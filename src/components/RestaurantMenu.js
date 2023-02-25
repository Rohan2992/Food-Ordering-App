import { IMG_CDN_URL } from "../Config";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  const { cloudinaryImageId, name, avgRating, costForTwoMsg } = restaurant;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <img
          className="w-56 h-56 m-4"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurant.jpg"
        />
        <ul className="m-4">
          <li>{name}</li>
          <li>{avgRating}</li>
          <li>{costForTwoMsg}</li>
        </ul>
      </div>
      <div className="m-4">
        <h1 className="text-4xl font-extrabold">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items)?.map((menu, i) => (
            <li key={i}>{"* " + menu?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
