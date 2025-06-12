import { useEffect, useState } from "react"
import ShimmerComp from "./ShimmerComp"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constants"
import useResMenu from "../utils/useResMenu"
import RestaurantMenuCategory from "./RestaurantMenuCategory"


const RestaurantMenu = ()=>{
    let [index,setIndex]= useState(0)
    const {resId}= useParams()
     const resInfo = useResMenu(resId)
    
   

   

    if(resInfo === null){
        return (
            <ShimmerComp/>
            
        )
    }
    const{name,totalRatingsString,cuisines,avgRatingString,locality,sla}=resInfo.data.cards[2].card.card.info
    const lengthOfCards = resInfo.data.cards.length
    const itemCards = resInfo.data.cards[lengthOfCards-1].groupedCard.cardGroupMap.REGULAR.cards ;
    const filteredItemCards = itemCards.filter((it)=>{
       return  it.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log("fil dta",filteredItemCards)
    
    return (
        <div className="restaurant-menu-card text-center">
            <div className="restaurant-menu-card-heading">
                <h1 className="font-bold my-5 text-2xl">{name}</h1>
                <h4 className="font-bold text-lg">{cuisines.join(", ")}</h4>
                <h4>{avgRatingString}{"stars"}  {totalRatingsString}</h4>
                <h4>{locality}</h4>
                <h4>{sla.slaString}</h4>
            </div>
            <hr></hr>
            {
                filteredItemCards.map((item,idx)=>{
                    return ( <div key = {item.card.card.categoryId}>
                        < RestaurantMenuCategory 
                        menuDetails={item?.card?.card}
                        showMenuList={ index==idx ? true :  false}
                        setShowMenuIndex = { ()=> setIndex(idx)}
                    /></div>)
                    

                })

            }
           
        </div>
    )
}

export default RestaurantMenu