import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Email is required"],
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
      required: [true, "Gender is required"],
    },
    dateOfBirth: {
      type: String,
      required: [true, "Date of Birth is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const User = model("User", userSchema);

export default User;
