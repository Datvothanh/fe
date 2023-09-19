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
  USER_REGISTER_FAIL_EXIST_USER,
  USER_REGISTER_FAIL_EXIST_EMAIL,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_REQUEST_SUCCESS,
  REFRESH_TOKEN_REQUEST_FAIL,
} from "../Constants/UserContants";
import axios from "../../api/axios";
import {  useContext, useState, useEffect } from 'react'
var CryptoJS = require("crypto-js");
const secretKey = "!$6T9wS#*k0DzV@yLq#u&2xA+3F5mB1cG";

// LOGIN
export const login = (emailUserName, pwd) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/auth/login`,
      { usernameOrEmailAddress: emailUserName, password: pwd },
      config
    );

    function encryptData(data, secretKey) {
      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        secretKey
      ).toString();
      return ciphertext;
    }
    
    var accessTokenData = encryptData(data.accessToken, secretKey);
    var refreshTokenData = encryptData(data.token, secretKey);
    localStorage.setItem("authTokens", JSON.stringify({access: accessTokenData , refresh: refreshTokenData }));
    var authTokensData = JSON.stringify({access: accessTokenData , refresh: refreshTokenData })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      authTokens: authTokensData,
      user: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// REGISTER
export const register =
  (givenName, userName, surName, emailAddress, pwd, sex, dateOfBirth) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const boleanUser = await axios.get(
        `/auth/checkUser?username=${userName}`,
        config
      );

      const boleanEmail = await axios.get(
        `/auth/checkEmail?email=${emailAddress}`,
        config
      );

      if (boleanEmail.data) {
        dispatch({ type: USER_REGISTER_FAIL_EXIST_EMAIL });
      } else if (boleanUser.data) {
        dispatch({ type: USER_REGISTER_FAIL_EXIST_USER });
      } else {
        const { data } = await axios.post(
          `/auth/register`,
          {
            givenName: givenName,
            userName: userName,
            surName: surName,
            emailAddress: emailAddress,
            password: pwd,
            sex: sex,
            dateOfBirth: dateOfBirth,
          },
          config
        );
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// USER_INFORMATION
export const info = (decryptedAccessToken , decryptedRefreshToken) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + decryptedAccessToken,
      },
    };

    const { data } = await axios.get(
      `/v1/home/userInfo?token=${decryptedAccessToken}`,
      config
    );
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    if (error.response && error.response.status === 403) {
      try {
        const newAccessToken = await refreshToken(decryptedRefreshToken , decryptedAccessToken);

        // Sau khi có được access token mới, thử lại yêu cầu ban đầu.
        const configWithNewToken = {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + newAccessToken,
          },
        };

        const { data } = await axios.get(
          `/v1/home/userInfo?token=${newAccessToken}`,
          configWithNewToken
        );

        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
      } catch (refreshError) {
        dispatch({ type: USER_LOGOUT });
      }
    } else {
      // Xử lý các lỗi khác (không phải lỗi 403).
    }
  }
};

// LOGOUT
export const logout = (accessToken) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    await axios.get(`/auth/logout`, config);
    localStorage.removeItem("authTokens");
    dispatch({ type: USER_LOGOUT });
    // dispatch({ type: USER_DETAILS_RESET });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// REFRESHTOKEN
export const refresh = (refreshToken , accessTokenOld) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/auth/refreshToken`,
      { token: refreshToken },
      config
    );

    await axios.post(
      `/auth/expiredToken?token=${accessTokenOld}`,
      config
    );

    function encryptData(data, secretKey) {
      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        secretKey
      ).toString();
      return ciphertext;
    }
    var accessTokenData = encryptData(data.accessToken, secretKey);
    var refreshTokenData = encryptData(data.token, secretKey);
    localStorage.setItem("accessToken", JSON.stringify(accessTokenData));
    localStorage.setItem("refreshToken", JSON.stringify(refreshTokenData));
    console.log(data.accessToken);
  console.log(data.token);
    //  dispatch(info(data.accessToken, data.token));
    dispatch({
      type: REFRESH_TOKEN_REQUEST_SUCCESS,
      payloadAccessToken: data.accessToken,
      payloadRefreshToken: data.token,
    });
  } catch (error) {
    dispatch(
      // type: REFRESH_TOKEN_REQUEST_FAIL,
      // payload:
      //   error.response && error.response.data.message
      //     ? error.response.data.message
      //     : error.message,
      logout(accessTokenData)
    );
  }
};


const refreshToken = async (decryptedRefreshToken , decryptedAccessToken) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(
      `/auth/expiredToken?token=${decryptedAccessToken}`,
      config
    );

    const requestBody = {
      token: decryptedRefreshToken,
    };

    function encryptData(data, secretKey) {
      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        secretKey
      ).toString();
      return ciphertext;
    }

    const response = await axios.post("/auth/refreshToken", requestBody, config);
    var accessTokenData = encryptData(response.data.accessToken, secretKey);
    var refreshTokenData = encryptData(response.data.token, secretKey);
    localStorage.setItem("authTokens", JSON.stringify({access: accessTokenData , refresh: refreshTokenData }));
  
    return response.data.accessToken;

    
  } catch (error) {
    // Xử lý lỗi nếu quá trình refresh token gặp vấn đề.
    throw error;
  }
};
