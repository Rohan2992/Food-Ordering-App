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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img " />

      <h2>
        <Link to={"/restaurant/" + id}>{name} </Link>
      </h2>

      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}* rating</h4>
    </div>
  );
};

export default RestaurantCard;
