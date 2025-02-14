import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", userController.userRegister);
// router.post("/login", userController.userLogin);
// router.post("/logout", userController.userLogout); // Future example

export default router;
