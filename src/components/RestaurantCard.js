import { styleForCard, CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  let { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    props.resData;
  console.log("props", props);
  return (
    <div className="restaurant-Card-container" style={styleForCard}>
      <div className="Card-baseLane">
        <div className="card-image-cont">
          <img className="card-image" src={CDN_URL + cloudinaryImageId}></img>
        </div>
        <h3 className="card-header">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{props.resData.sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;