const mongoose = require("mongoose");

const designSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true // Optional for now, to allow guest generation if needed
  },
  enhancedPrompt: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  style: {
    type: String,
    default: "Realistic",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Design", designSchema);
