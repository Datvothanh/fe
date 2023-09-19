import SideBarMain from "../components/SideBarMain";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Box, createTheme, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderMain from "../components/HeaderMain";
import FeedMain from "../components/FeedMain";
import "./home.css";
import RightSidebar from "../components/RightSideBar";
function Home() {
  return (
    <div className="App">
      <HeaderMain />
      <div className="app__body">
        <SideBarMain />
        <FeedMain />
        <RightSidebar/>
        {/* <Rightbar /> */}
      </div>
    </div>
  );
};

export default Home;
