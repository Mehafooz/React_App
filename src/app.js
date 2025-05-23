import React from "react";
import { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const root3 = ReactDOM.createRoot(document.getElementById("root3"));

const Grocery = lazy(()=>{
 return import("./components/Grocery")
})
const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRoute =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about-us",
        element:<AboutUs/>
      },
      {
        path:"/contact-us",
        element:<ContactUs/>
      },
      {
        path:"/restaurant-menu/:resId",
        element:<RestaurantMenu/>
      },
      {
    path:"/grocery",
    element:(<Suspense fallback={(<h1> It is loading</h1>)}> <Grocery/> </Suspense>)
    }
      
    ],
    errorElement:<Error/>
  },
  {
    path:"/about-us",
    element:<AboutUs/>
  },
  {
    path:"/contact-us",
    element:<ContactUs/>
  }
  
])

// root3.render(<AppLayout />);
root3.render(<RouterProvider router={appRoute}/>)