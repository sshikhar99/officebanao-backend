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


app.use(cors({
  origin: "https://officebanao-clone-production.up.railway.app",
  credentials: true,
}));

// Handle preflight OPTIONS requests
app.options("*", cors());

connectDB();

app.use("/api/partners", partnerRoutes);

app.get("/", (req, res) => res.send("Backend running 🚀"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
