import { useDispatch, useSelector } from "react-redux"
import { clearAllItems } from "../utils/cartSlice"
import RestaurantMenuCategoryList from "./RestaurantMenuCategoryList"

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const clearCartItems =()=>{
      dispatch(clearAllItems())
      // Dispatch an action to clear the cart items

    }
  return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl">
            cart
            <div className="w-6/12 m-auto">
                <button onClick={clearCartItems} className="p-2 m-2  bg-orange-200 rounded-lg">clear cart</button>
                <RestaurantMenuCategoryList categoryDetails={[...cartItems]}></RestaurantMenuCategoryList>
            </div>
        </h1>
        
    </div>
  )
}

export default Cart