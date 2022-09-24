const Comment = require('../models/comment')

postComment = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a comment',
    })
  }

  const com = new Comment(body);

  if (!com) {
    return res.status(400).json({ success: false, error: err })
  }

  com
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: com._id,
        idPost: com.idPost,
        author: com.author,
        text: com.text,
        message: 'Comment on post created!'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Comment not created!',
      })
    })
}

module.exports = postComment