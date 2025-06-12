import { styleForCard, CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  let { name, cuisines, avgRating, cloudinaryImageId, costForTwo,promoted } =
    props.resData;
  console.log("props", props);
  console.log("promoted",promoted)
  return (
    <div className="restaurant-Card-container m-4 p-4 w-[270px] min-w-[270px]  rounded bg-zinc-100 hover:bg-zinc-300" >
      <div className="Card-baseLane">
        <div className="card-image-cont">
          <img className="card-image rounded-xl" src={CDN_URL + cloudinaryImageId}></img>
        </div>
        <h3 className="card-header font-bold py-1 text-lg">{name}</h3>
        <h4 className="font-light text-gray-600">{cuisines.join(", ")}</h4>
        <h4 className="font-thin text-gray-400">{costForTwo}</h4>
        <h4 className="font-mono">{avgRating} rating</h4>
        <h4 className="font-mono">{props.resData.sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export const RestaurantCardWithLabel =(RestaurantCard)=>{
  return (props)=>{
    console.log("propss in card",props)
    return (
      <div>
        <label className=" absolute bg-black text-white mx-4 p-2 rounded-lg">Promoted</label>
        <RestaurantCard resData = {props.resDatas}/>
      </div>
    )
  }

}
export default RestaurantCard;