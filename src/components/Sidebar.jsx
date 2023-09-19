import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import moment from "moment";
import { Stack, Skeleton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../Redux/Actions/userActions";
const Sidebar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;
  const authTokens = JSON.parse(localStorage.getItem("authTokens"));
  const accessToken = authTokens.access;
  const refreshToken = authTokens.refresh;

  var CryptoJS = require("crypto-js");
  const secretKey = "!$6T9wS#*k0DzV@yLq#u&2xA+3F5mB1cG";
  function decryptData(encryptedData, secretKey) {
    var bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }

  var decryptedAccessToken = decryptData(accessToken, secretKey).slice(1, -1);
  var decryptedRefreshToken = decryptData(refreshToken, secretKey).slice(1, -1);

  useEffect(() => {
    dispatch(info(decryptedAccessToken, decryptedRefreshToken));
  }, []);

  const name = `${user.givenName}  ${user.surName}`;
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [currentPage, setCurrentPage] = useState("#home"); // Giá trị mặc định tùy chọn
  function handlePageChange(pageId) {
    setCurrentPage(pageId);
  }
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [100]);
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={30} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={30} />
          <Skeleton variant="text" height={30} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={30} />
          <Skeleton variant="text" height={30} />
        </Stack>
      ) : (
        <>
          <Box position="fixed">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="/home"
                  sx={{ color: currentPage === "#home" ? "red" : "normal" }}
                  onClick={() => handlePageChange("#home")}
                >
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Homepage" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton 
                  component="a"
                  href = {`/profile/${user.id}`}
                  sx={{
                    color: currentPage === "profile" ? "red" : "normal",
                  }}
                  onClick={() => handlePageChange("profile")}
                >
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="#pages"
                  sx={{ color: currentPage === "#pages" ? "red" : "normal" }}
                  onClick={() => handlePageChange("#pages")}
                >
                  <ListItemIcon>
                    <Article />
                  </ListItemIcon>
                  <ListItemText primary="Pages" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="#groups"
                  sx={{ color: currentPage === "#groups" ? "red" : "normal" }}
                  onClick={() => handlePageChange("#groups")}
                >
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText primary="Groups" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="#marketplace"
                  sx={{
                    color: currentPage === "#marketplace" ? "red" : "normal",
                  }}
                  onClick={() => handlePageChange("#marketplace")}
                >
                  <ListItemIcon>
                    <Storefront />
                  </ListItemIcon>
                  <ListItemText primary="Marketplace" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="#friends"
                  sx={{
                    color: currentPage === "#friends" ? "red" : "normal",
                  }}
                  onClick={() => handlePageChange("#friends")}
                >
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Friends" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="#settings"
                  sx={{
                    color: currentPage === "#settings" ? "red" : "normal",
                  }}
                  onClick={() => handlePageChange("#settings")}
                >
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemIcon>
                    <ModeNight />
                  </ListItemIcon>
                  <Switch onClick={toggle} checked={darkMode} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;
