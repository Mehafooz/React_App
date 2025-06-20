import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuCategoryList = (props) => {
  let { categoryDetails,showAddButton = true  } = props;
  console.log("ctd", categoryDetails);
  const dispatch = useDispatch();
  return (
    <div>
      {categoryDetails.map((item,index) => {
        return (
          <div
             key={`${item.card.info.id}-${index}`} 
            className="p-2 m-2 text-left border-gray-200 border-b-2 flex justify-between items-center"
          >
            <div className="py-2 w-8/12">
              <div>{item.card.info.name}</div>
              <div>
                ₹ {(item.card.info.price ?? item.card.info.defaultPrice) / 100}
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            {/* Container sized exactly to image width */}
            <div className="w-28 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full"
                alt={item.card.info.name}
              />
            {showAddButton && ( <button
                onClick={()=>{
                  //need to dispatch an action

                  //for dispatch we need to useDispatch hook
                  // so at the top we create a dispatch var and use it in ou
                  //func

                  //and we need to import the action as well from the cart slice

                  // and we will pass the item to add item

                  dispatch(addItem(item))

                  // thats it here 3 will be the payload

                }}
                type="button"
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded shadow hover:bg-blue-600 text-xs sm:text-sm"
                style={{ minWidth: "50px" }} // optional min width for button
              >
                Add +
              </button>)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuCategoryList;
