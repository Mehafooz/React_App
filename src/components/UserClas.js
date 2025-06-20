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
  <div className="user-card max-w-xl mx-auto mt-8 p-6 bg-white shadow-xl rounded-xl border border-gray-200">
    <div className="user-details text-center">
      <img
        src={this.state.userInfo.avatar_url}
        alt="User Avatar"
        className="w-28 h-28 mx-auto rounded-full border-4 border-amber-600 mb-4 shadow-sm"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-1">
        <span className="font-normal">{this.state.userInfo.name}</span>
      </h3>
      <h3 className="text-md text-gray-600 mb-1">
        Location: <span className="font-normal">{this.state.userInfo.location}</span>
      </h3>
      <h4 className="text-md text-gray-500 mb-4">Email: mehafoozalikhan@gmail.com</h4>

      {/* <div className="Counterr mt-4">
        <h5 className="text-md text-gray-700 mb-2">Count: {this.state.countt}</h5>
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition duration-200"
          onClick={() => {
            this.setState({
              countt: this.state.countt + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div> */}
    </div>
  </div>
);

    //     return (
            
    //     <div className="user-card">
    //         <div className="user-details">
    //             <img src={this.state.userInfo.avatar_url}></img>
    //             <h3>Name : {this.state.userInfo.name}</h3>
    //             <h3>Location : {this.state.userInfo.location}</h3>
    //             <h4>Email : mehafoozalikhan@gmail.com</h4>
    //             <div className="Counterr">
    //                <h5>Count : {this.state.countt}</h5>
    //                <button onClick={()=>{
    //                 this.setState({
    //                     countt:this.state.countt+1
    //                 })
    //                }}>Increase count</button>
    //             </div>
    //         </div>
    //     </div>
    // )
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