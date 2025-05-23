import { useEffect, useState } from "react"
import ShimmerComp from "./ShimmerComp"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constants"
import useResMenu from "../utils/useResMenu"


const RestaurantMenu = ()=>{
    const {resId}= useParams()
     const resInfo = useResMenu(resId)
    
   

   

    if(resInfo === null){
        return (
            <ShimmerComp/>
            
        )
    }
    const{name,totalRatingsString,cuisines,avgRatingString,locality,sla}=resInfo.data.cards[2].card.card.info
    const itemCards=resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards ?? resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards
    console.log("itc",itemCards)
    return (
        <div className="restaurant-menu-card">
            <div className="restaurant-menu-card-heading">
                <h1>{name}</h1>
                <h4>{avgRatingString}{"stars"}  {totalRatingsString}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{locality}</h4>
                <h4>{sla.slaString}</h4>
            </div>
            <hr></hr>
            <div className="restaurant-menu-card-menu">
                <h4>Restaurant Menu</h4>
               <div className="restaurant-items">
                <ul>
                    {itemCards.map((res)=> (
                        
                        <li key={res.card.info.id}>
                        <div>
                            {res.card.info.name}
                        </div>
                        <div>
                            ${res.card.info.price/100}
                        </div>
                        <div>
                            {res.card.info.ratings.aggregatedRating.rating}stars ({res.card.info.ratings.aggregatedRating.ratingCount})
                        </div>
                        <div>--- * ---</div>
                    </li>
                    ))}
                    
                </ul>
               </div>
            </div>
        </div>
    )
}

export default RestaurantMenu