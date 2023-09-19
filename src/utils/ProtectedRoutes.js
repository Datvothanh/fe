import { Navigate, Outlet } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
const ProtectedRoutes = () => {
  
  const userLogin = useSelector((state) => state.userLogin);
  const { authTokens } = userLogin;
  return authTokens ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
