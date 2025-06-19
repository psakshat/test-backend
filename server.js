const express = require("express");
const connectiondb = require("./src/db/dbconfig");

const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./src/routes/user/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the Test Backend API");
});
// DB connectoin
connectiondb(app, PORT);

// Auth Routes
app.use("/api/auth", authRoutes);
