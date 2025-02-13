import express from "express";
import cookieParser from "cookie-parser";
import user from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1", user);

export default app;
