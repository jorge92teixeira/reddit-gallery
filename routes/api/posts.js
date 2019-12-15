const router = require('express').Router();
const { list } = require('../../cron/list');

// @route   GET /api/list
// @desc    Get list
// @access  Public
router.get('/list', async (req, res) => {
  try {
    return res.send(list);
  } catch (error) {
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
