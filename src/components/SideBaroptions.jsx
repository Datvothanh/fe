import React from "react";
import { Avatar } from "@mui/material";
import "./sidebarrow.css"
function SideBaroptions({src,Icon,title}) {
    return(
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            <p>{title}</p>
        </div>
    )
}

export default SideBaroptions