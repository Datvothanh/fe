import React from "react";
import "./HeaderMain.css";
import { Groups, Search } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { OndemandVideo } from "@mui/icons-material";
import { SportsEsports } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

import { Apps } from "@mui/icons-material";
import { Forum } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import { ArrowDropDown } from "@mui/icons-material";
function HeaderMain() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
        <div className="header_search">
          <Search />
          <input type="text" placeholder="Tìm kiếm trên Facebook" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_option header_option--active">
          <Home fontSize="large" />
        </div>

        <div className="header_option">
          <OndemandVideo fontSize="large" />
        </div>

        <div className="header_option">
          <Groups fontSize="large" />
        </div>

        <div className="header_option">
          <SportsEsports fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <IconButton>
          <Apps />
        </IconButton>

        <IconButton>
          <Forum />
        </IconButton>

        <IconButton>
          <Notifications />
        </IconButton>

        <div className="header_info">
          <Avatar src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/362651208_2041376356196115_4257106300984433324_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qX_ydBLiVNcAX84BLcI&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBWPeH6nGDrzMk0DuUBs30fJ2yjv14XUpfogGWPeqFxSw&oe=650A9321" />
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
