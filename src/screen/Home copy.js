// import { useRef, useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { logout, info, refresh } from "../Redux/Actions/userActions";
// import { useDispatch } from "react-redux";
// import Header from "../components/Header";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Loading from "../components/LoadingError/Loading";
// const Home = () => {
//   const dispatch = useDispatch();
//   const userInfo = useSelector((state) => state.userInfo);
//   const { user, loading } = userInfo;
//   const authTokens = JSON.parse(localStorage.getItem("authTokens"));
//   const accessToken = authTokens.access;
//   const refreshToken = authTokens.refresh;
//   console.log(accessToken);
//   console.log(refreshToken);
//   var CryptoJS = require("crypto-js");
//   const secretKey = "!$6T9wS#*k0DzV@yLq#u&2xA+3F5mB1cG";
//   function decryptData(encryptedData, secretKey) {
//     var bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
//     var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
//     return decryptedData;
//   }

//   var decryptedAccessToken = decryptData(accessToken, secretKey).slice(1, -1);
//   var decryptedRefreshToken = decryptData(refreshToken, secretKey).slice(1, -1);

//   const logoutHandler = () => {
//     dispatch(logout(decryptedAccessToken));
//   };

//   useEffect(() => {
//     dispatch(info(decryptedAccessToken, decryptedRefreshToken));
//   }, []); // [] để đảm bảo useEffect chỉ chạy một lần khi component được render

//   return (
//     <>
//       <div className="App">
//         <Header />
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             {loading && <Loading />}
//             <div>{decryptedAccessToken}</div>
//             <div>{decryptedRefreshToken}</div>
//             <div>{user.id}</div>
//             <div>
//               {user.givenName} {user.surName}
//             </div>
//             <Link onClick={logoutHandler}>Đăng xuất</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
