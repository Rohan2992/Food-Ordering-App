import { IMG_CDN_URL } from "../Config";

const CartItems = ({
  name,
  category,
  cloudinaryImageId,
  description,
  price
}) => {
  return (
    <div className="text-center m-4 w-64 bg-white border-yellow-900 border-solid border-2">
      <img
        className="mt-4 w-40 mx-auto"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="img "
      />
      <p className="mt-2 font-bold">{name}</p>
      <p className="mt-2 font-bold">{price / 100}</p>
      <h3 className=" p-2 break-words">{description}</h3>
      <h4>{category}</h4>
    </div>
  );
};

export default CartItems;
