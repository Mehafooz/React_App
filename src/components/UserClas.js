import React from "react"
class UserClas extends React.Component{
    constructor(props){
        console.log("child 1 constructor")
        super(props)
        this.state={
            countt:5,
            userInfo:null
        }
    }
    render(){
        console.log("child 1 render")
        if(this.state.userInfo == null) return
        return (
            
        <div className="user-card">
            <div className="user-details">
                <img src={this.state.userInfo.avatar_url}></img>
                <h3>Name : {this.state.userInfo.name}</h3>
                <h3>Location : {this.state.userInfo.location}</h3>
                <h4>Email : mehafoozalikhan@gmail.com</h4>
                <div className="Counterr">
                   <h5>Count : {this.state.countt}</h5>
                   <button onClick={()=>{
                    this.setState({
                        countt:this.state.countt+1
                    })
                   }}>Increase count</button>
                </div>
            </div>
        </div>
    )
    }
    async componentDidMount(){
        console.log("child 1 comp did mount")
         const data = await fetch("https://api.github.com/users/MEHAFOOZ")
        const psd = await data.json()
       
        this.setState({
            userInfo:psd
        })
        // this.myTimer = setInterval(()=>{
        //     console.log("hello world")
        // },2000)
       
    }
    componentDidUpdate(){
        console.log(" child comp did update")
        
    }

    componentWillUnmount(){
        // clearInterval(this.myTimer)
        console.log("component will go unmounted noww")
    }

    
}

export default UserClas