import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import partnerRoutes from "./routes/PartnerRoutes.js";
import connectDB from "./db.js";

// Load .env
dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());

// CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://officebanao-frontend.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/api/partners", partnerRoutes);

// Test route
app.get("/", (req, res) => res.send("Backend running 🚀"));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
