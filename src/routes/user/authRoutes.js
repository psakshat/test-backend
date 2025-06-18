const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
} = require("../../controller/auth/auth.controller.js");

// POST /api/auth/register
router.post("/register", registerUser);

// POST /api/auth/login
router.post("/login", loginUser);

module.exports = router;
