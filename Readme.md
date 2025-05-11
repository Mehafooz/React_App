creating a dom element using js
// const heading = document.createElement("h1");
// heading.innerHTML = "hello world using js";
// const root = document.getElementById("root1");
// root.appendChild(heading);

creating the dom elemment using react create ele and create root 
fromm reactdom
// //react element
// const heading2 = React.createElement(
//   "h2",
//   { id: "reactt-heading" },
//   "hello world by reactt!!!"
// );
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(heading2);

// console.log("react heading", heading2);

jsx - it is html like syntax bbut nothtml

let jsxhd = (
  <h1 id="jsxid" className="hi">
    jsx heading
  </h1>
);
//babel converts the above line to react element
so it will convert it to react create elememt
so like that the js engine understands
console.log("jsx heading", jsxhd);

nested react elements
const heading3 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("div", { id: "grand-child1" }, "gc1"),
    React.createElement("div", { id: "grand-child2" }, "gc2"),
  ])
);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(jsxhd);

let ex = 200;
//functioanl componn,it is ntg but a js func which return the react ele
const HeadingComponent = () => {
  return (
    <div>
      <h2>
        {400 + 400}
        {ex}
        {ex}
      </h2>
      <h4>Hello world by func comp</h4>
    </div>
  );
};

root3.render(HeadingComponent() or <HeadingComponent/>); // this is how we render func compon


//component componsitin : it is ntg but passing the
//func component inside other func comp
//example

const HeadingComponent2 = () => {
  return (
    <h1>
      <HeadingComponent />
      Hello world by func comp
    </h1>
  );
};

if we want pass data to component
<RestaurantCard key={it.id} resData={it}/>)

and how we usse it in that react func comp
const RestaurantCard =(props)=>{
        //props obbjs has ssome prop like resData
        // let resData = props
        // mmeans we will be taking the resData from the prop Object
        // it is called ass destructing

        // from resData we can take name rating as WEll lik 
        // let (name,id,cost)= resData
        let {name,cuisines,avgRating,cloudinaryImageId,costForTwo}=props.resData
        console.log("props",props)
        return(<div className="restaurant-Card-container" style={styleForCard}>
          <div className="Card-baseLane">
              
                <div className="card-image-cont">
              <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
                </div>
                <h3 className="card-header">
                        {name}
                </h3>
                <h4>
                     {cuisines.join(",")}  
                </h4>
                <h4>
                        {avgRating} rating
                </h4>
                <h4>
                        {costForTwo}
                </h4>
                <h4>
                        {props.resData.sla.deliveryTime} minutes
                </h4>

          </div>
        </div>)
}

..howw we lloop the components in react we
can use map
 <div className="res-container" > 
            
       {/* <RestaurantCard resData={resList[0]}/>

       <RestaurantCard resData={resList[1]}/>

       <RestaurantCard resData={resList[2]}/>

       <RestaurantCard resData={resList[3]}/> */}
       {
            resList.map(it=> (<RestaurantCard key={it.id} resData={it}/>))
       }
       {/* why this key we are passing for
       the card.
       All the res cards are child and will be in the same level 
       eg rest container will be parent
       amd rescard1 will be one child and rescard2 and so one
       and all will be in the same leevel

       why bcz if we have another res added to the resList
       amd react dont know whivh one came newly so it
       will again newly render all the cards again.

       so it will clean the container and renders this res cards
       newluy.
       so if we give the key then bcz of it will know
       whicvh is the new one and it will render new one only instead of all
       
        */}
       
      
    </div>
    
//now we will make it modular and clean up
for that we will create a src folder and 
in that we will have components folder
there we will  create the commponent and export it
like export default componentName 
amd we will import it where we use

and each component will have only one comp name
so the above export deafult will work

but as we see constants have two variiabble so
how we export bcz we cant write to deafult exprt

then we need to do the named export means
bef the const add export
expotr const a
export const b
