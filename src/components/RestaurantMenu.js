import { IMG_CDN_URL } from "../Config";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const { cloudinaryImageId, name, avgRating, costForTwoMsg } = restaurant;

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <img
          className="w-64 h-64 m-4"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurant.jpg"
        />
        <ul className="m-4">
          <li>{name}</li>
          <li>{avgRating}</li>
          <li>{costForTwoMsg}</li>
        </ul>
      </div>
      <div className="m-2">
        <h1 className="text-4xl font-extrabold p-3">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items)?.map((item, i) => (
            <li key={i} className="flex justify-between m-3 p-3 bg-slate-200">
              {" - " + item?.name}
              <button
                className="bg-yellow-300 p-1"
                onClick={() => handleAddItem(item)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
