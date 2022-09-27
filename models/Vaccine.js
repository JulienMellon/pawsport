const mongoose = require("mongoose");

const VaccineSchema = new mongoose.Schema({
  vaccine: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  dateAdministered: {
    type: Date,
    required: true,
  },
  petid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Pet",
	},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Vaccine", VaccineSchema);
