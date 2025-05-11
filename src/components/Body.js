import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  let [internalResListSt, setInternalResListSt] = useState([...resList]);

  return (
    <div className="body">
      <div className="Search">search</div>
      <hr></hr>
      <div className="Utilites">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              console.log("buutttom is clicked");
              console.log(internalResListSt);
              let filt = internalResListSt.filter((res) => res.avgRating > 4.5);
              console.log(internalResListSt);
              setInternalResListSt(filt);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="showAll">
          <button
            className="showAll-btn"
            onClick={() => {
              setInternalResListSt(resList);
            }}
          >
            Show All Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {internalResListSt.map((it) => (
          <RestaurantCard key={it.id} resData={it} />
        ))}
      </div>
    </div>
  );
};
export default Body;