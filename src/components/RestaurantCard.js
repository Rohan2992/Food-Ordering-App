import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  id
}) => {
  return (
    <div className="m-4 w-72 h-60 bg-white border-slate-900 border-solid border-2">
      <img
        className="mt-4 w-40 mx-auto"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="img "
      />

      <h2 className="text-center mt-2">
        <Link to={"/restaurant/" + id}>{name} </Link>
      </h2>

      <h3 className="text-center p-2 break-words">{cuisines.join(", ")}</h3>
      <h4 className="text-center">{avgRating}* rating</h4>
    </div>
  );
};

export default RestaurantCard;
