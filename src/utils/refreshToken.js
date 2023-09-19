import axios from "axios";
var CryptoJS = require("crypto-js");
const secretKey = "!$6T9wS#*k0DzV@yLq#u&2xA+3F5mB1cG";
const refreshToken = async (decryptedRefreshToken, decryptedAccessToken) => {
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

    const response = await axios.post(
      "/auth/refreshToken",
      requestBody,
      config
    );
    var accessTokenData = encryptData(response.data.accessToken, secretKey);
    var refreshTokenData = encryptData(response.data.token, secretKey);
    localStorage.setItem(
      "authTokens",
      JSON.stringify({ access: accessTokenData, refresh: refreshTokenData })
    );

    return response.data.accessToken;
  } catch (error) {
    // Xử lý lỗi nếu quá trình refresh token gặp vấn đề.
    throw error;
  }
};

export default refreshToken;
