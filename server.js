import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import partnerRoutes from "./routes/partnerRoutes.js";

dotenv.config();

const app = express();

// Parse JSON
app.use(express.json());

// ✅ CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:3000", // React dev
      "https://officebanao-frontend.vercel.app", // production
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors()); // handle preflight

// MongoDB Atlas connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/partners", partnerRoutes);

// Test route
app.get("/", (req, res) => res.send("Backend running 🚀"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
