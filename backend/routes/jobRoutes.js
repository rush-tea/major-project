const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const companyMiddleware = require("../middleware/company");
const Job = require('../models/Job');
const Company = require('../models/Company');

router.post(
  "/create-jobs",
  authMiddleware,
  companyMiddleware,
  async (req, res) => {
    try {
      const {
        jobTitle,
        jobDescription,
        jobRole,
        jobCompensation,
        jobFixedCompensation,
      } = req.body;
      const companyId = req.user.companyId; // Get company ID from authenticated user

      // Create new job in database
      const newJob = await Job.create({
        jobTitle,
        jobDescription,
        jobRole,
        jobCompensation,
        jobFixedCompensation,
        companyId,
      });

      res.json(newJob);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }
);

router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.findAll({
      include: [{ model: Company, as: "company" }],
    });
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
