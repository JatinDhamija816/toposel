import {
  ACCESS_TOKEN_EXPIRATION_MS,
  REFRESH_TOKEN_EXPIRATION_MS,
} from "../config/constants.js";

export const setAuthCookies = (res, accessToken, refreshToken) => {
  const secure = process.env.NODE_ENV === "production";
  const sameSite = secure ? "None" : "Lax";

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure,
    sameSite,
    path: "/",
    maxAge: ACCESS_TOKEN_EXPIRATION_MS,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure,
    sameSite,
    path: "/",
    maxAge: REFRESH_TOKEN_EXPIRATION_MS,
  });
};
