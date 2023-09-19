import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userRegisterReducer,
  userLoginReducer,
  userInfoReducer,
  refreshTokenReducer,
} from "./Reducers/userReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userInfo: userInfoReducer,
  userRefreshToken: refreshTokenReducer,
});

// login
const authTokens = localStorage.getItem("authTokens")
  ? JSON.parse(localStorage.getItem("authTokens"))
  : null;

// const refreshTokenFromLocalStorage = localStorage.getItem("refreshToken")
//   ? JSON.parse(localStorage.getItem("refreshToken"))
//   : null;

const initialState = {
  userLogin: {
    authTokens: authTokens,
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
 
);

export default store;
