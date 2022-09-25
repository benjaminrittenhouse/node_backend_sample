const Comment = require('../models/comment')

getComments = async (req, res) => {
  await Comment.find({postId: req.params.postId}, (err, comment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!comment.length) {
      return res
        .status(404)
        .json({ success: false, error: `Comments not found` })
    }
    return res.status(200).json({ success: true, data: comment })
  }).catch(err => console.log(err))
}

module.exports = getComments