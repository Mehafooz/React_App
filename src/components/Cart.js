import { useDispatch, useSelector } from "react-redux";
import { clearAllItems } from "../utils/cartSlice";
import RestaurantMenuCategoryList from "./RestaurantMenuCategoryList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearAllItems());
    // Dispatch an action to clear the cart items
  };

  if(cartItems.length == 0){
     return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl">
        <div className="text-center text-2xl font-bold my-4">cart</div>

        <div>Cart is empty..</div>
       
       
      </h1>
    </div>
  );

  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl">
        <div className="text-center text-2xl font-bold my-4">cart</div>
       
        <div className="w-6/12 m-auto">
        
          <RestaurantMenuCategoryList
         
            categoryDetails={[...cartItems]}
            showAddButton = {false}
          ></RestaurantMenuCategoryList>

            <button
            onClick={clearCartItems}
            className="p-2 m-2  bg-orange-200 rounded-lg"
          >
            clear cart
          </button>
        </div>
      </h1>
    </div>
  );
};

export default Cart;
