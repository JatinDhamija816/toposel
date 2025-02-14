import jwt from "jsonwebtoken";
import CustomJWTError from "./CustomJWTError.js";
import {
  ACCESS_TOKEN_EXPIRATION_STR,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  REFRESH_TOKEN_EXPIRATION_STR,
} from "../config/constants.js";

const generateToken = (userId, email) => {
  try {
    const accessToken = generateAccessToken(userId, email);
    const refreshToken = generateRefreshToken(userId, email);

    return { accessToken, refreshToken };
  } catch (error) {
    throw new CustomJWTError(500, `Error generating tokens: ${error.message}`);
  }
};

export const generateAccessToken = (userId, email) => {
  try {
    return jwt.sign({ userId, email }, JWT_ACCESS_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRATION_STR,
    });
  } catch (error) {
    throw new CustomJWTError(
      500,
      `Error generating access token: ${error.message}`,
    );
  }
};

export const generateRefreshToken = (userId, email) => {
  try {
    return jwt.sign({ userId, email }, JWT_REFRESH_SECRET, {
      expiresIn: REFRESH_TOKEN_EXPIRATION_STR,
    });
  } catch (error) {
    throw new CustomJWTError(
      500,
      `Error generating refresh token: ${error.message}`,
    );
  }
};

export default generateToken;
