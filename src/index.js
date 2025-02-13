import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();

function startServer() {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, async () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`,
    );
    await connectDB();
  });
}

startServer();
