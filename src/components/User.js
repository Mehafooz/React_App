import { useEffect, useState } from "react"


const User=()=>{
   
    let [countt,setCountt]=useState(5);
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("helllooo")
        },1000)

        return ()=>{
            console.log("component is going to destroyy"
            )
            clearInterval(timer)
        }
        
    },[])
    return (
        <div className="user-card">
            <div className="user-details">
                <h3>Name : Mehafooz</h3>
                <h3>Location : Guntur</h3>
                <h4>Email : mehafoozalikhan@gmail.com</h4>
                <div className="Counterr">
                   <h5>Count : {countt}</h5>
                   <button onClick={()=>{setCountt(countt+1)}}>Increase count</button>
                </div>
                
            </div>
        </div>
    )
}

export default User