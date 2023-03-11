// import { useContext } from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
// import userContext from "../utils/userContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  id
}) => {
  // const { user } = useContext(userContext);
  return (
    <div className="text-center m-4 w-72 bg-white border-slate-900 border-solid border-2">
      <img
        className="mt-4 w-40 mx-auto"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="img "
      />

      <h2 className="mt-2 font-bold">
        <Link to={"/restaurant/" + id}>{name} </Link>
      </h2>

      <h3 className=" p-2 break-words">{cuisines.join(", ")}</h3>
      <h4>{avgRating}* rating</h4>
      {/* {console.log(user.name, user.mail)} */}
      {/* <p>Name - {user.name}</p>
      <p>Mail - {user.mail}</p> */}
    </div>
  );
};

export default RestaurantCard;
