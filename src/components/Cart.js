import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./cartItems";

const Cart = () => {
  const cartItem = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Cart Items {cartItem.length}</h1>
      <button
        className="bg-red-300 p-2 m-2"
        onClick={() => {
          handleClearCart();
        }}
      >
        clear Cart
      </button>
      <div className="flex flex-wrap justify-center">
        {console.log(cartItem)}
        {cartItem.map((item, index) => (
          <CartItems key={item.id} {...item}></CartItems>
        ))}
      </div>
    </>
  );
};

export default Cart;
