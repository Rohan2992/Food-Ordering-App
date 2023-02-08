import { IMG_CDN_URL } from "../Config";

export default RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img " />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}* rating</h4>
    </div>
  );
};
