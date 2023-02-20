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
