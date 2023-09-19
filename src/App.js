import React from "react";
// import { useRef, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./screen/Login";
import Register from "./screen/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./screen/Home";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ForgotPass from "./screen/ForgotPass";
import NotFound from "./screen/NotFound";
import ChatRoom from "./screen/ChatRoom";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import {createTheme, ThemeProvider } from "@mui/material";
import ProfileMain from "./screen/ProfileMain";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  const darkTheme = createTheme({
    palette: {
      mode: `${darkMode ? "dark" : "light"}`,
    },
  });
  return (
    <ThemeProvider theme={darkTheme} >
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile/:UserId" element={<ProfileMain />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
