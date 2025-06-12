import { useState } from "react"
import RestaurantMenuCategoryList from "./RestaurantMenuCategoryList"

const RestaurantMenuCategory =(props)=>{
    // let [showMenu, setShowMenu] = useState(false);
    let {menuDetails,showMenuList,setShowMenuIndex}= props
    const handleClick = ()=>{
        // setShowMenu(!showMenu)
        setShowMenuIndex()
    console.log("clicked !!")
}
    
    return (
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
            <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {menuDetails.title}({menuDetails.itemCards.length})
                </span>
                <span>
                    ⌄
                </span>
            </div>
            {
                showMenuList && (   <div key ={menuDetails.title}>
                <RestaurantMenuCategoryList categoryDetails={menuDetails.itemCards}/> 

            </div>)
            }
         
             
        </div>
    )
}



export default RestaurantMenuCategory