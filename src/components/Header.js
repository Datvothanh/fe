import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
//   const [keyword, setKeyword] = useState();
//   const dispatch = useDispatch();
//   let history = useHistory();

//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;


  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={'/sign-in'}>
        positronX
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={'/sign-in'}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/sign-up'}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Header;
