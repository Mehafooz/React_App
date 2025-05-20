import { Component } from "react"
import User from "./User"
import UserClas from "./UserClas"

class AboutUs extends Component{
    constructor(props){
        super(props)
        console.log("parent comp constructor")
    }
    componentDidMount(){
        console.log(" parent component did mount")
    }
    render(){
        console.log(" parent component did mount")
         return (<div className="About-us"> 
    <h2>
        About Us
    </h2>
    <div>
        <User/>
        <UserClas name={"Mehafoozz"}/>
         <UserClas name={"Mehafoozz"}/>


    </div>

    </div>)

    }
     componentDidUpdate(){
        console.log("parent comp did update")
    }
}


export default AboutUs