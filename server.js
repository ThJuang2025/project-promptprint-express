// import { app } from './app.js';


// const port = process.env.PORT || 3000;


// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// ----------
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));
// Middleware
app.use(cors());
app.use(express.json());
// Basic Test Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});
// Mock Route for AI Design
app.post("/api/generate-design", (req, res) => {
  const { prompt } = req.body;
  console.log("Received prompt:", prompt);
  // Mock response
  setTimeout(() => {
    res.json({
      imageUrl:
        "https://images.unsplash.com/photo-1583336633292-2ec414d95204?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      enhancedPrompt: `Enhanced version of: ${prompt} - High quality, detailed, trending on artstation.`,
    });
  }, 1000); // Simulate delay
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});