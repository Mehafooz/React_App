import { useRouteError } from "react-router-dom"


const Error = ()=>{
    const err = useRouteError()
    console.log("err",err)
   return <div>Ops something went wrong</div>
}

export  default Error