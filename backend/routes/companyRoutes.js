const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const companyMiddleware = require('../middleware/company');
const Company = require('../models/Company');

// Create company profile
router.post('/create-profile', authMiddleware, companyMiddleware, async (req, res) => {
  try {
    const { companyName, companyDescription } = req.body;

    // Create new company profile in database
    const newCompany = await Company.create({
      companyName,
      companyDescription,
    });

    res.json(newCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/profile', authMiddleware, async (req, res) => {
    try {
      // Find the company profile with the specified user ID
      const companyProfile = await Company.findOne({ where: { userId: req.user.id } });
  
      // Check if a company profile was found
      if (!companyProfile) {
        return res.status(404).json({ error: 'Company profile not found' });
      }
  
      // Send the company profile as the response
      res.json(companyProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

  router.post('/create-jobs', authMiddleware, companyMiddleware, async (req, res) => {
    try {
      const { jobTitle, jobDescription } = req.body;
      const companyId = req.user.companyId; // Get company ID from authenticated user
  
      // Create new job in database
      const newJob = await Job.create({
        jobTitle,
        jobDescription,
        companyId,
      });
  
      res.json(newJob);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;
