const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/authMiddleware');

// 🔒 This route is protected & for SCIENTIST only
router.get('/scientist-zone', protect, restrictTo('scientist'), (req, res) => {
  res.json({
    message: `Welcome Scientist ${req.user.name}, you have access to this zone.`,
  });
});

// 🔒 This route is protected & for any logged-in user
router.get('/dashboard', protect, (req, res) => {
  res.json({
    message: `Hello ${req.user.name}, you are logged in as ${req.user.role}.`,
  });
});

module.exports = router;
