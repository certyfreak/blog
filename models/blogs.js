const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
});

// blogSchema.set('toJSON',{

// });

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;