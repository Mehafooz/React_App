import RestaurantCard ,{RestaurantCardWithLabel}from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState ,useRef} from "react";
import ShimmerComp from "./ShimmerComp";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../utils/userContext";
import { useContext } from "react";
import LocationSearchBox from "./LocationSearchBox";

const Body = () => {
  let [internalResListSt, setInternalResListSt] = useState([]);
  let [internalFilResListSt, setInternalFilResListSt] = useState([]);
  const [loc, setLoc] = useState(() => {
  return localStorage.getItem("user_location_cords") || "lat=13.0843007&lng=80.2704622";
});

  
  let [val,setVal] =useState('');
  // useEffect(()=>{
  //   const savedLocation = localStorage.getItem("user_location_cords");
    
  //    if (loc && loc !== savedLocation) {
  //     console.log("use effect called")
  //   console.log("loc",loc)
  //   fetchData();
  //   localStorage.setItem("last_loc", loc);
  // }
    
  // },[loc])

//   useEffect(() => {
//   if (!loc) return;

//   const lastFetchedLoc = localStorage.getItem("last_fetched_location");

//   if (lastFetchedLoc !== loc) {
//     fetchData();
//     localStorage.setItem("last_fetched_location", loc);
//   }
// }, [loc]);

const prevLoc = useRef(null);

useEffect(() => {
  if (!loc) return;

  if (prevLoc.current !== loc) {
    fetchData();
    prevLoc.current = loc;
  }
}, [loc]);

  
  const usernamee = useContext(userContext)

  console.log("urs",usernamee)
  const ResCardWithLabel = RestaurantCardWithLabel(RestaurantCard)
  const fetchData = async ()=>{
    console.log("fetch loc")
    //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80451&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
    let url = "https://www.swiggy.com/dapi/restaurants/list/v5?"+loc+"&collection=80451&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    const data = await fetch(url)
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
        <div className="filter-btn rounded-lg m-4 px-4 py-1 ">
          <LocationSearchBox
           
          
  onLocationSelect={({ lat, lon, address }) => {
    let cord = "lat="+lat+"&lng="+lon;
    setLoc(cord)
    console.log("Latitude:", lat);
    console.log("Longitude:", lon);
    console.log("Address:", address);
  }}
/>
        </div>
         <div>
           <input type="text" className="search-box  rounded-lg focus:outline-none text-sm text-gray-800" value={val} onChange={(e)=>{
          console.log(e.target.value)
          setVal(e.target.value)

        }} placeholder="Search for restaurants"></input>
        <button className="rounded-lg bg-orange-200 m-4 px-4 py-2 hover:bg-orange-400" onClick={()=>{
          console.log("valuee",val)
          const filtd= internalResListSt.filter((rs)=>{
            return rs.name.toLowerCase().includes(val.toLowerCase())


          })
          setInternalFilResListSt(filtd)
        }}>Search</button>
        </div>
        <div className="filter " >
          <button
            className="filter-btn rounded-lg bg-orange-200 m-4 px-4 py-2 hover:bg-orange-400 "
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
            className="showAll-btn rounded-lg bg-orange-200 m-4 px-4 py-2 hover:bg-orange-400"
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