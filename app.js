import React from "react";
import ReactDOM from "react-dom/client";


// const heading = document.createElement("h1");
// heading.innerHTML = "hello world using js";
// const root = document.getElementById("root1");
// root.appendChild(heading);

// //react element
// const heading2 = React.createElement(
//   "h2",
//   { id: "reactt-heading" },
//   "hello world by reactt!!!"
// );
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(heading2);

// console.log("react heading", heading2);
let jsxhd = (
  <h1 id="jsxid" className="hi">
    jsx heading
  </h1>
);
//babel converts the above line to react element
console.log("jsx heading", jsxhd);

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

root3.render(HeadingComponent()); // this is how we render func compon

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
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
     
      <img className="logo" src="https://i.postimg.cc/ZY7rJ45h/Chat-GPT-Image-May-11-2025-10-10-28-AM.png" />

      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
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
let styleForCard ={
        backgroundColor:"#f0f0f0"
}
let resList=[{
        "id": "623300",
        "name": "Paradise Biryani",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/ed5543be-2478-4bc0-bbb8-b38869aabfc9_623300.jpg",
        "locality": "Sai Nagar",
        "areaName": "Patinata",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Biryani",
            "Kebabs",
            "North Indian",
            "Hyderabadi"
        ],
        "avgRating": 4.2,
        "parentId": "700",
        "avgRatingString": "4.2",
        "totalRatingsString": "4.2K+",
        "promoted": true,
        "adTrackingId": "cid=29009016~p=0~adgrpid=29009016#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=623300~plpr=COLLECTION~eid=6a94f79c-a6ac-49e9-b32c-74fd0fe65f15~srvts=1746952768928~collid=83639",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 5.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "5.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-05-11 23:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹249",
            "logoCtx": {
                "text": "BENEFITS"
            }
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "29009016"
    },{
        "id": "80777",
        "name": "Hotel Raj Towers",
        "cloudinaryImageId": "mcxdk3emrznvk4gczw10",
        "locality": "Governor Peta",
        "areaName": "Governor Peta",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "Chinese",
            "Tandoor"
        ],
        "avgRating": 4.3,
        "parentId": "101299",
        "avgRatingString": "4.3",
        "totalRatingsString": "11K+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-05-11 23:30:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textExtendedBadges": {},
                "textBased": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
                "text": "BENEFITS"
            }
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "750"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "652753",
        "name": "Venapusa home foods",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/25/8ae77765-7a4b-4074-b81f-430f1d9c2e91_1864da40-01b3-4df5-983f-4d5837c049bd.JPG",
        "locality": "New Postal colony",
        "areaName": "Vijayawada",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "South Indian",
            "Chinese",
            "Street Food",
            "Fast Food",
            "Healthy Food",
            "Biryani",
            "Andhra"
        ],
        "avgRating": 3.7,
        "parentId": "400828",
        "avgRatingString": "3.7",
        "totalRatingsString": "523",
        "promoted": true,
        "adTrackingId": "cid=28578753~p=2~adgrpid=28578753#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=652753~plpr=COLLECTION~eid=2409fa39-d374-4b1a-85ab-8daebff674a7~srvts=1746953506637~collid=83639",
        "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-05-11 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120",
            "logoCtx": {
                "text": "BENEFITS"
            }
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "28578753"
    },
    {
        "id": "731303",
        "name": "Hoskote 4 Am Biryani",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/18/2c14df11-6002-49de-8b0a-a00cb3a73209_b6f7bb64-31f2-4f66-b5b9-45ef8640fdf9.JPG",
        "locality": "arundalpet",
        "areaName": "Governorpet",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Biryani",
            "Chinese",
            "Kebabs"
        ],
        "avgRating": 4.3,
        "parentId": "476532",
        "avgRatingString": "4.3",
        "totalRatingsString": "6.5K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-05-11 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textExtendedBadges": {},
                "textBased": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99",
            "logoCtx": {
                "text": "BENEFITS"
            },
            "footerText": "94 DEALS LEFT",
            "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "921693",
        "name": "Hotel Grand Krishna's Restaurant",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/9/1cc26fef-ab67-452e-ab88-dfeb9bb14ee8_da386b17-9c68-4e13-b4da-9eddaa1b2072.jpg",
        "locality": "REVENUE WARD 9 ",
        "areaName": "Governorpet",
        "costForTwo": "₹299 for two",
        "cuisines": [
            "North Indian",
            "Chinese ",
            "Tandoor ",
            "Biryani ",
            "Beverages "
        ],
        "avgRating": 4.8,
        "parentId": "592253",
        "avgRatingString": "4.8",
        "totalRatingsString": "20",
        "promoted": true,
        "adTrackingId": "cid=28583356~p=3~adgrpid=28583356#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=921693~plpr=COLLECTION~eid=e92cdecc-9b17-4f00-88dd-1e54338b220e~srvts=1746953506637~collid=83639",
        "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-05-11 23:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50",
            "logoCtx": {
                "text": "BENEFITS"
            }
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "28583356"
    },
    {
        "id": "68615",
        "name": "Silver Dum Biryani - Original",
        "cloudinaryImageId": "rlyepihgnuxcs74qjitv",
        "locality": "Patamata",
        "areaName": "Gurunanak Colony",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Biryani",
            "Chinese",
            "Seafood"
        ],
        "avgRating": 4.5,
        "parentId": "471039",
        "avgRatingString": "4.5",
        "totalRatingsString": "20K+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-05-11 16:30:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                "description": "Delivery!"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {}
            }
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "1.6K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "996626",
        "name": "Bezawada's 4AM Biryani",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/24/bca931fa-c7c2-4f5c-aa4e-a06f89ec9b9f_bb450b80-ced9-48d0-bf81-040c6acd2e8c.jpg",
        "locality": "Governorpet",
        "areaName": "Governorpet",
        "costForTwo": "₹199 for two",
        "cuisines": [
            "Biryani"
        ],
        "avgRating": 3.9,
        "parentId": "581341",
        "avgRatingString": "3.9",
        "totalRatingsString": "297",
        "promoted": true,
        "adTrackingId": "cid=28584379~p=4~adgrpid=28584379#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=996626~plpr=COLLECTION~eid=37921c64-31d8-4f80-86ba-d3e8de336dba~srvts=1746953506637~collid=83639",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 6,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-05-11 18:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
                "text": "BENEFITS"
            }
        },
        "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "28584379"
    }

]

const Body=()=>{
        return (<div className="body"> 
        <div className="Search">
              search  
        </div>
        
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
        </div>)
}

const AppLayout = () => {
  return <div className="app-layout">
        <HeaderComponent/>
        <Body/>
  </div>;
};

root3.render(<AppLayout/>);


//React hooks