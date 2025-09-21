import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    partnerType: { type: String, required: true }, // "vendor" or "designer"
    companyName: String, // for vendor
    contactPerson: String,
    email: { type: String, required: true },
    phone: String,
    services: String,
    location: String,
    // Designer-specific fields
    name: String,
    portfolio: String,
    experience: String,
    specialization: String,
  },
  { timestamps: true }
);

const Partner = mongoose.model("Partner", partnerSchema);

export default Partner;
