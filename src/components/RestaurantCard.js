import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";

export default RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  id
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img " />
      <Link to={"/restaurant/" + id}>
        <h2>{name}</h2>
      </Link>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}* rating</h4>
    </div>
  );
};
