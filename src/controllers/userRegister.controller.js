import bcrypt from "bcryptjs";

import {
  BCRYPT_SALT_ROUNDS,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../config/constants.js";

import User from "../models/user.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import generateToken from "../utils/tokens.utils.js";
import generateUsername from "../utils/generateUsername.js";
import { setAuthCookies } from "../utils/cookies.utils.js";

const userRegister = asyncHandler(async (req, res) => {
  let { fullName, email, gender, dateOfBirth, country, password } = req.body;

  fullName = fullName?.trim();
  email = email?.trim().toLowerCase();
  gender = gender?.trim();
  country = country?.trim();

  if (!fullName || !email || !gender || !dateOfBirth || !country || !password) {
    throw new ApiError(400, "All fields are required");
  }

  if (!EMAIL_REGEX.test(email)) {
    throw new ApiError(400, "Invalid email format");
  }

  if (!PASSWORD_REGEX.test(password)) {
    throw new ApiError(
      400,
      "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, and a number",
    );
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new ApiError(400, "User already exists");
  }

  const username = await generateUsername(fullName);
  if (!username) {
    throw new ApiError(500, "Failed to generate a unique username");
  }

  const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    fullName,
    email,
    gender,
    dateOfBirth,
    country,
    password: hashedPassword,
    username,
  });

  await newUser.save();

  const { accessToken, refreshToken } = await generateToken(
    newUser._id,
    newUser.email,
  );

  setAuthCookies(res, accessToken, refreshToken);

  const userResponse = newUser.toObject();
  delete userResponse.password;

  return res
    .status(201)
    .json(new ApiResponse(201, "User registered successfully", userResponse));
});

export default userRegister;
