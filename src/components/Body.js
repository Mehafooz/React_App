import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerComp from "./ShimmerComp";
const Body = () => {
  let [internalResListSt, setInternalResListSt] = useState([]);

  useEffect(()=>{
    console.log("use effect called")
    fetchData()
  },[])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80451&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
    const jsonn = await data.json()
    const datta = await jsonn?.data?.cards
    console.log("fil",datta)
     const res =  datta.filter((res)=>{
      console.log("v",res?.card?.card['@type'])
        return (res.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
    })
    const mppd = res.map((rs)=>{
      return rs?.card?.card?.info
    })
    console.log("fil",res,mppd)
    setInternalResListSt(mppd)
    console.log("json is ",jsonn)
  }

  if(internalResListSt.length == 0){
    return <ShimmerComp/>
  }

  
  return (
    <div className="body">
      <div className="Search">
        <input type="text" className="search-box"></input>
        <button>Search</button>
      </div>
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