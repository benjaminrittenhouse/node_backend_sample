const Comment = require('../models/comment')

postComment = (req, res) => {
  const body = req.body
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a comment',
    })
  }

  const comment = new Comment(body)

  if (!comment) {
    return res.status(400).json({ success: false, error: err })
  }

  comment
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        _id: comment._id,
        author: comment.author,
        text: comment.text,
        postId: comment.postId,
        message: 'comment post created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'comment post not created!' + comment.title,
      })
    })
}

module.exports = postComment