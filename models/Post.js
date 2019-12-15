const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  subreddit: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

PostSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject.updatedAt;
  },
});

module.exports = mongoose.model('Post', PostSchema);
