const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const companyMiddleware = require("../middleware/company");
const Job = require("../models/Job");
const Company = require("../models/Company");
const db = require("../config/database");
const Eligibility = require("../models/Eligibility");

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
        jobLocation,
        eligibility,
      } = req.body;

      // Find the company associated with the authenticated user
      const company = await Company.findOne({ where: { UserId: req.user.id } });

      // Check if the company exists
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }

      // Get the company ID
      const companyId = company.id;

      // Create new job and associated eligibility entry in database
      const newJob = await db.sequelize.transaction(async (t) => {
        const job = await Job.create(
          {
            jobTitle,
            jobDescription,
            jobRole,
            jobCompensation,
            jobFixedCompensation,
            jobLocation,
            companyId,
          },
          { transaction: t }
        );
        const newEligibility = await Eligibility.create(
          {
            branchedAllowed: eligibility.branchedAllowed,
            pwdAllowed: eligibility.pwdAllowed,
            minCgpa: eligibility.minCgpa,
            jobId: job.id,
          },
          { transaction: t }
        );
        return { job, eligibility: newEligibility };
      });

      res.json(newJob);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }
);


router.put(
  "/jobs/:id",
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
        jobLocation,
        eligibility,
      } = req.body;

      const companyId = req.user.companyId; // Get company ID from authenticated user
      const jobId = req.params.id;

      // Find the job to update
      const job = await Job.findOne({
        where: { id: jobId, companyId },
        include: [{ model: Eligibility, as: "eligibility" }],
      });

      // Check if the job exists and belongs to the company
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }

      // Update the job and eligibility entries
      await db.sequelize.transaction(async (t) => {
        await job.update(
          {
            jobTitle,
            jobDescription,
            jobRole,
            jobCompensation,
            jobFixedCompensation,
            jobLocation,
          },
          { transaction: t }
        );

        if (job.eligibility) {
          // If the job already has an eligibility entry, update it
          await job.eligibility.update(
            {
              branchedAllowed: eligibility.branchedAllowed,
              pwdAllowed: eligibility.pwdAllowed,
              minCgpa: eligibility.minCgpa,
            },
            { transaction: t }
          );
        } else {
          // Otherwise, create a new eligibility entry
          await Eligibility.create(
            {
              branchedAllowed: eligibility.branchedAllowed,
              pwdAllowed: eligibility.pwdAllowed,
              minCgpa: eligibility.minCgpa,
              jobId: jobId,
            },
            { transaction: t }
          );
        }
      });

      res.json({ message: "Job updated successfully" });
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
