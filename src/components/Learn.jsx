import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext } from "../theme";

const Learn = ()=>{
    const theme = useTheme();
    // console.log(theme);
    const aa = useContext(ColorModeContext)
    return(
        <>
            {/* <h1>Learn Material Ui useTheme</h1> */}
            <Button color="primary" onClick={()=>aa.toggleColorMode()}>Mode</Button>
        </>
    )
}

export default Learn