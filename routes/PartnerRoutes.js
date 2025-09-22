import express from "express";
import Partner from "../models/Partner.js";

const router = express.Router();

// POST /api/partners
router.post("/", async (req, res) => {
  try {
    const { partnerType, companyName, contactPerson, email, phone, services, location } = req.body;

    if (!partnerType || !companyName || !contactPerson || !email) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newPartner = new Partner({ partnerType, companyName, contactPerson, email, phone, services, location });
    const savedPartner = await newPartner.save();

    res.status(201).json({ message: "Partner saved successfully", partner: savedPartner });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
