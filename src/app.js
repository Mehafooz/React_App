import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body
 from "./components/Body";
const root3 = ReactDOM.createRoot(document.getElementById("root3"));







const AppLayout = () => {
  return <div className="app-layout">
        <HeaderComponent/>
        <Body/>
  </div>;
};

root3.render(<AppLayout/>);


//React hooks