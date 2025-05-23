import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"

const useResMenu = (resId)=>{
    const [resMenuInfo,setResMenuInfo]=useState(null)

    useEffect(()=>{
        fetchResMenu()

    },[])

     const fetchResMenu = async () => {
      const data = await fetch(
        MENU_URL
        +resId
      );
      let parsedata = await data.json();
      console.log("data", parsedata);
      setResMenuInfo(parsedata)
    };

    return resMenuInfo
}

export default useResMenu