const router = require('express').Router();
const Post = require('../../models/Post');
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

// @route   GET /api/category/:id
// @desc    Get all posts from one category
// @access  Public
router.get('/category/:id', async (req, res) => {
  try {
    const posts = await Post.find({ category: req.params.id.toLowerCase() });
    return res.send(posts);
  } catch (error) {
    return res.status(500).send('Server Error');
  }
});

// @route   GET /api/subreddit/:id
// @desc    Get all posts from one subreddit
// @access  Public
router.get('/subreddit/:id', async (req, res) => {
  try {
    const posts = await Post.find({ subreddit: req.params.id });
    return res.send(posts);
  } catch (error) {
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
