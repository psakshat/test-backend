const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: String,
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "doctor"], required: true },
    specialty: { type: String },
    availability: [{ start: Date, end: Date }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
