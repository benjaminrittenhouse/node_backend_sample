const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
  id: { type: String, required: true },
  author: {type: String, required: true},
  title: {type: String, required: true},
  text: {type: String, required: true},
})

module.exports = mongoose.model('blog', Blog)