import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";

import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import dashboardRoutes from "./routes/dashboard.route.js";
import userRoutes from "./routes/user.route.js";

import connectToMongoDB from "../db/connnectToMongoDB.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //to parse incoming request from jason payload (from req.body)
app.use(cookieParser()); // to get cookies from req.cookie.jwt, used for authentication

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
