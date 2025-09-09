import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ESM-friendly __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

// ✅ Express 5: must use regex fallback, not "/*"
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server is running on port: ${PORT}`);
});
