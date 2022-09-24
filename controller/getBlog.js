const Blog = require('../models/blog')
const mongoose = require('mongoose');

getBlogs = async (req, res) => {
  const objId = req.body._id;
  await Blog.find({ _id: objId }, (err, blog) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!blog.length) {
      return res
        .status(404)
        .json({ success: false, error: `Blog not found` })
    }
    return res.status(200).json({ success: true, data: blog })
  }).catch(err => console.log(err + " req.body.id: " + req.body.id))
}

module.exports = getBlogs