import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_REGISTER_FAIL_EXIST_EMAIL,
  USER_REGISTER_FAIL_EXIST_USER,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_REQUEST_SUCCESS,
  REFRESH_TOKEN_REQUEST_FAIL,
} from "../Constants/UserContants";

// LOGIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        authTokens: action.authTokens,
        user: action.user,
      };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { authTokens: null };
    default:
      return state;
  }
};

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, confirmEmail: true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_REGISTER_FAIL_EXIST_EMAIL:
      return { loading: false, error: "Email already registered" };
    case USER_REGISTER_FAIL_EXIST_USER:
      return { loading: false, error: "Username already registered" };
    default:
      return state;
  }
};

// INFO USER
export const userInfoReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

// REFRESH TOKEN
export const refreshTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case REFRESH_TOKEN_REQUEST:
      return { loading: true };
    case REFRESH_TOKEN_REQUEST_SUCCESS:
      return { loading: false, accessToken: action.payloadAccessToken , refreshToken: action.payloadRefreshToken  };
    case REFRESH_TOKEN_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE PROFILE
// export const userUpdateProfileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_UPDATE_PROFILE_REQUEST:
//       return { loading: true };
//     case USER_UPDATE_PROFILE_SUCCESS:
//       return { loading: false, success: true, userInfo: action.payload };
//     case USER_UPDATE_PROFILE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
