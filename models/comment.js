const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  id: { type: String, required: true },
  // post it refers to
  idPost: {type: String, required: true},
  author: {type: String, required: true},
  text: {type: String, required: true},
})

module.exports = mongoose.model('comment', Comment)