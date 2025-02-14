import dotenv from "dotenv";

dotenv.config();

export const EMAIL_REGEX = /\S+@\S+\.\S+/;
export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const BCRYPT_SALT_ROUNDS = 10;

export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

export const ACCESS_TOKEN_EXPIRATION_MS = Number(
  process.env.ACCESS_TOKEN_EXPIRY,
);
export const REFRESH_TOKEN_EXPIRATION_MS = Number(
  process.env.REFRESH_TOKEN_EXPIRY,
);
export const ACCESS_TOKEN_EXPIRATION_STR = process.env.ACCESS_TOKEN_EXPIRY_STR;
export const REFRESH_TOKEN_EXPIRATION_STR =
  process.env.REFRESH_TOKEN_EXPIRY_STR;
