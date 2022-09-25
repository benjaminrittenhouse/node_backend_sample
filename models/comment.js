const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  id: { type: String, required: false },
  author: { type: String, required: true },
  text: {type: String, required: true},
  postId: {type: String, requred: true},
})

module.exports = mongoose.model('comment', Comment)