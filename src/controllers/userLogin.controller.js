import bcrypt from "bcryptjs";

import { EMAIL_REGEX } from "../config/constants.js";

import User from "../models/user.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import generateToken from "../utils/tokens.utils.js";
import { setAuthCookies } from "../utils/cookies.utils.js";

const userLogin = asyncHandler(async (req, res) => {
  let { identifier, password } = req.body;

  identifier = identifier?.trim().toLowerCase();

  if (!identifier || !password) {
    throw new ApiError(400, "All fields are required");
  }

  let user;

  if (identifier.includes("@")) {
    if (!EMAIL_REGEX.test(identifier)) {
      throw new ApiError(400, "Invalid email format");
    }
    user = await User.findOne({ email: identifier });
  } else {
    user = await User.findOne({ username: identifier });
  }

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }

  const { accessToken, refreshToken } = await generateToken(
    user._id,
    user.email,
  );

  if (accessToken && refreshToken) {
    setAuthCookies(res, accessToken, refreshToken);
  }

  const userResponse = user.toObject();
  delete userResponse.password;

  return res
    .status(200)
    .json(new ApiResponse(200, "User logged in successfully", userResponse));
});

export default userLogin;
