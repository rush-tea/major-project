const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const companyMiddleware = require("../middleware/company");
const User = require('../models/User');
const Company = require("../models/Company");

router.post("/create-profile", authMiddleware, async (req, res) => {
  try {
    const { companyName, companyDescription } = req.body;
    const userId = req.user.id;

    const company = await Company.create({
      companyName,
      companyDescription,
      userId: userId // associate the company with the user by setting the UserId field
    });

    res.json(company);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


router.get("/profile", authMiddleware, async (req, res) => {
  try {
    // Find the company profile with the specified user ID
    const companyProfile = await Company.findOne({
      where: { userId: req.user.id },
    });

    // Check if a company profile was found
    if (!companyProfile) {
      return res.status(404).json({ error: "Company profile not found" });
    }

    // Send the company profile as the response
    res.json(companyProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
