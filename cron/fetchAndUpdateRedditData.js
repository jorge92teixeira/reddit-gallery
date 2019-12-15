const { CronJob } = require('cron');
const Snoowrap = require('snoowrap');
const config = require('../config/config');
const Post = require('../models/Post');
const { list } = require('./list');

const snoo = new Snoowrap({
  userAgent: 'reddit-gallery-app',
  clientId: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  username: config.REDDIT_USERNAME,
  password: config.REDDIT_PASSWORD,
});

const getPostsForEachCategory = async (category) => {
  const posts = category.map(async (s) => {
    try {
      const response = await snoo.getSubreddit(s).getHot();
      return response;
    } catch (error) {
      return console.log(error.message);
    }
  });

  return Promise.all(posts);
};

const standardizePosts = (posts, category) => {
  const filterPosts = posts.filter((p) => p.url.includes('https://') && !p.url.includes('youtube'));

  const standardPosts = filterPosts.map((p) => {
    const s = list[category]
      .filter((sub) => sub.toLowerCase() === p.subreddit.display_name.toLowerCase())[0];
    return {
      subreddit: s,
      category: category.toLowerCase(),
      title: p.title,
      url: p.url,
    };
  });

  return standardPosts;
};

const savePostsInDb = async (posts) => {
  posts.forEach(async (p) => {
    try {
      const post = await Post.findOne({ url: p.url });
      if (!post) {
        const postToSave = new Post(p);
        await postToSave.save();
      }
    } catch (error) {
      console.log(error.message);
    }
  });
};

const time = '00 00 00 * * *'; // Everyday at midnight
// const time = '00 */01 * * * *'; // Every minute

const fetchAndUpdateRedditData = () => {
  const job = new CronJob(time, () => {
    console.log(new Date().toUTCString());
    const subredditCategories = Object.keys(list);
    subredditCategories.forEach(async (category) => {
      let posts = await getPostsForEachCategory(list[category]);
      posts = posts.flat(Infinity);
      posts = standardizePosts(posts, category);
      savePostsInDb(posts);
    });
  });

  job.start();
};

module.exports = {
  fetchAndUpdateRedditData,
};
