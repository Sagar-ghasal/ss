import { createTheme } from "@mui/material";
import { createContext, useState } from "react";

export const tokens = (mode) => ({
    ... mode === "dark" ? {
        gray: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0"
        },
        green: {
            100: "#478545",
        },
        background:{
            100:"#00adff"
        }
    } : {
        gray: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0"
        },
        green: {
            100: "#ac4785",
        },
        background:{
            100:"#00adff"
        }
    },
});

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    // console.log("tokens", tokens(mode));
    // console.log("mode", mode);
    return {
        palette: {
            mode: mode,
            ...mode === "dark" ? {
                primary: {
                    main: "#292929",
                },
                background:{
                    default:colors.background[100]
                }
            } : {
                primary: {
                    main: "#147987",
                },
                background:{
                    default:"#e23e57"
                }
            },
        },
    };
};


export const ColorModeContext = createContext({
    toggleColorMode:()=>{}
})

export const useMode = ()=>{
    const [mode, setMode] = useState("dark");

    const colorMode = {
        toggleColorMode:()=>{
            setMode((prev)=>prev==="dark"?"light":"dark")
        }
    }


    const theme = createTheme(themeSettings(mode))

    return [colorMode, theme]
}