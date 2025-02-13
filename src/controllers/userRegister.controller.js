import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import generateUsername from "../utils/generateUsername.js";
import bcrypt from "bcryptjs";

const userRegister = asyncHandler(async (req, res) => {
  const { fullName, email, gender, dateOfBirth, country, password } = req.body;

  if (
    [fullName, email, gender, dateOfBirth, country, password].includes(
      undefined,
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existingEmail = await User.findOne({ email: email.toLowerCase() });
  if (existingEmail) {
    throw new ApiError(400, "User already exists");
  }

  const username = await generateUsername(fullName);

  const salt = bcrypt.genSaltSync(10);
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

  ApiResponse(201, "User registered successfully", newUser);
});

export default userRegister;
