import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import partnerRoutes from "./routes/PartnerRoutes.js";
import connectDB from "./db.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
app.use(express.json());


// ✅ CORS: allow all (permissive)
app.use(cors());

// Handle preflight OPTIONS requests globally
app.options("*", cors());

// Fallback OPTIONS responder to avoid 404 on unknown routes
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      req.header("Access-Control-Request-Headers") || "Content-Type, Authorization"
    );
    return res.sendStatus(204);
  }
  next();
});

connectDB();

app.use("/api/partners", partnerRoutes);

app.get("/", (req, res) => res.send("Backend running 🚀"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
