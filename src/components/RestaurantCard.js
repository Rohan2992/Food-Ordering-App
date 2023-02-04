import { IMG_CDN_URL } from "../Config";

export default RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString
}) => {
  // {console.log(props)}
  // const { name, cuisines, cloudinaryImageId, avgRatingString } =
  //   restaurant.info;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img "></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString}* rating</h4>
    </div>
  );
};

// const RestaurantCard = () => {
//     return (
//         <div className='card'>
//             <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb' alt='img '></img>
//             <h2>Burger King</h2>
//             <h3>Italian, Australian</h3>
//             <h4>5* rating</h4>
//         </div>
//     )
// }
