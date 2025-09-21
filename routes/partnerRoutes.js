import express from "express";
import Partner from "../models/Partner.js";

const router = express.Router();

// Create a new partner
router.post("/", async (req, res) => {
  try {
    const partnerData = req.body;
    const partner = new Partner(partnerData);
    const savedPartner = await partner.save();
    res.status(201).json(savedPartner);
  } catch (err) {
    console.error("❌ Error saving partner:", err);
    res.status(500).json({ error: "Server error, could not save partner" });
  }
});

// Optional: Get all partners
router.get("/", async (req, res) => {
  try {
    const partners = await Partner.find().sort({ createdAt: -1 });
    res.json(partners);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
