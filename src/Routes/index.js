import React from "react";
import MainRoutes from "./MainRoutes";
import { useRoutes } from "react-router-dom";

export const ThemeRoute = () =>{
   const routesArr = [MainRoutes]

   return useRoutes([...routesArr])
}