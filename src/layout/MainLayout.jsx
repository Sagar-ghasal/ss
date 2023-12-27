import React from "react";
import Header from "./element/Header";
import Footer from "./element/Footer";
import { Outlet } from "react-router-dom";


const MainLayout =() => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default MainLayout