import RestaurantCard ,{RestaurantCardWithLabel}from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerComp from "./ShimmerComp";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../utils/userContext";
import { useContext } from "react";

const Body = () => {
  let [internalResListSt, setInternalResListSt] = useState([]);
  let [internalFilResListSt, setInternalFilResListSt] = useState([]);
  
  let [val,setVal] =useState('');
  useEffect(()=>{
    console.log("use effect called")
    fetchData()
  },[])
  
  const usernamee = useContext(userContext)

  console.log("urs",usernamee)
  const ResCardWithLabel = RestaurantCardWithLabel(RestaurantCard)
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
    setInternalFilResListSt(mppd)
    console.log("json is ",jsonn)
  }

   const status = useOnlineStatus()
  if(!status){
    return (<div>Some thing went wrong!! ,Please check your internet connection.</div>)
  }

  if(internalResListSt.length == 0){
    return <ShimmerComp/>
  }
  
 

  
  return (
    <div className="body">
      {/* <div className="Search m-4">
        <input type="text" className="search-box border border-solid border-black " value={val} onChange={(e)=>{
          console.log(e.target.value)
          setVal(e.target.value)

        }}></input>
        <button className=" bg-orange-200 m-4 px-4 py-2" onClick={()=>{
          console.log("valuee",val)
          const filtd= internalResListSt.filter((rs)=>{
            return rs.name.toLowerCase().includes(val.toLowerCase())


          })
          setInternalFilResListSt(filtd)
        }}>Search</button>
      </div> */}
     {/* <hr></hr> */}
      <div className="Utilites flex justify-between m-2">
        <div>
           <input type="text" className="search-box border border-solid border-black rounded-lg" value={val} onChange={(e)=>{
          console.log(e.target.value)
          setVal(e.target.value)

        }}></input>
        <button className="rounded-lg bg-orange-200 m-4 px-4 py-2" onClick={()=>{
          console.log("valuee",val)
          const filtd= internalResListSt.filter((rs)=>{
            return rs.name.toLowerCase().includes(val.toLowerCase())


          })
          setInternalFilResListSt(filtd)
        }}>Search</button>
        </div>
        <div className="filter " >
          <button
            className="filter-btn rounded-lg bg-orange-200 m-4 px-4 py-2 "
            onClick={() => {
              console.log("buutttom is clicked");
              console.log(internalResListSt);
              let filt = internalResListSt.filter((res) => res.avgRating > 4.5);
              console.log(internalResListSt);
              setInternalFilResListSt(filt);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="showAll">
          <button
            className="showAll-btn rounded-lg bg-orange-200 m-4 px-4 py-2 "
            onClick={() => {
              setInternalFilResListSt(internalResListSt);
            }}
          >
            Show All Restaurants
          </button>
        </div>
      </div>
      <div className="mb-4">
          <hr></hr>
      </div>
      
      
      <div className="res-container flex flex-wrap">
        {internalFilResListSt.map((it) => (
          <Link key={it.id} to={"/restaurant-menu/"+it.id}>
            {
              
              it.promoted ? <ResCardWithLabel resDatas={it} /> :
              <RestaurantCard  resData={it} />
            }
          
          </Link>
          
        ))}
      </div>
    </div>
  );
};
export default Body;