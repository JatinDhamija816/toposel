import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./db/db.js";

async function startServer() {
  const PORT = process.env.PORT || 3000;

  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(
        `Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`,
      );
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
