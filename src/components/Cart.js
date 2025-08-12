import { useSelector } from "react-redux";
import MenuCategoryDescription from "../components/MenuCategoryDescription";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice"; 

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4 w-6/12 mx-auto">
      <div className="flex justify-between mb-4">
        <span className="text-2xl font-bold m-2 p-2">Cart Items</span>
        <button
          className="shadow-lg rounded-lg text-green-600 bg-amber-50 font-bold cursor-pointer p-2 m-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>        
      </div>
      <div className="p-2 m-2 items-center">{cartItems.length === 0 && (
          <span className="text-red-500 font-bold">Cart is empty</span>)}</div>
      <div className="flex flex-col items-center ">
        {/* component reuse */}
        <MenuCategoryDescription description={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
