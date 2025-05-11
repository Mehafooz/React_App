import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
const Body=()=>{
    return (<div className="body"> 
    <div className="Search">
          search  
    </div>
    <div className="res-container" > 
            
     
       {
            resList.map(it=> (<RestaurantCard key={it.id} resData={it}/>))
       }
      
       
      
    </div>
    </div>)
}

export default Body