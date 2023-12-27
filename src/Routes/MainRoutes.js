import React from "react";
import MainLayout from "../layout/MainLayout";
import Get from "../Pages/Get";
import Create from "../Pages/Create";

const MainRoutes = {
    path:"",
    element:<MainLayout/>,
    children:[
        {
            path:"/",
            element:<Get/>
        },
        {
            path:"create",
            element:<Create/>
        }
    ]
}


export default MainRoutes