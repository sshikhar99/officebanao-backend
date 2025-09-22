import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import partnerRoutes from "./routes/PartnerRoutes.js";
import connectDB from "./db.js";

// Load .env (works locally; not needed on Railway)
dotenv.config();

const app = express();

// Parse JSON
app.use(express.json());

// CORS setup - allow localhost and your Vercel frontend
app.use(
  cors({
    origin: [
      "http://localhost:3000", // local dev
      "https://officebanao-frontend.vercel.app", // deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Handle preflight requests for all routes
app.options("*", cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/partners", partnerRoutes);

// Test route
app.get("/", (req, res) => res.send("Backend running 🚀"));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
