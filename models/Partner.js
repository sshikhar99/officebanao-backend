import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    partnerType: {
      type: String,
      enum: ["vendor", "designer"],
      required: true,
    },
    companyName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    services: { type: String },
    location: { type: String },
  },
  { timestamps: true }
);

const Partner = mongoose.model("Partner", partnerSchema);
export default Partner;
