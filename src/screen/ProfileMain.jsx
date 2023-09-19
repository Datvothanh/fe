import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, createTheme, Stack } from "@mui/material";
import Profile from "../components/Profile/profile";
import HeaderMain from "../components/HeaderMain";
const ProfileMain = () => {
  return (
    <div>
      <HeaderMain />
      <Profile />
    </div>
  );
};

export default ProfileMain;
