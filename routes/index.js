const express = require('express')
const GetBlogs = require('../controller/getBlogs')
const GetBlog = require('../controller/getBlog')
const PostBlog = require('../controller/postBlog')

const PostComment = require('../controller/postComment')
const GetComments = require('../controller/getComments');
const GetAllComments = require('../controller/getAllComments');


const router = express.Router()

router.get('/blog/:id', GetBlogs)
router.get('/blog', GetBlog)
router.post('/blog/post', PostBlog)

// comments
    // post comment
router.post('/blog/post/comment/:postId', PostComment);

    // get comments for post
router.get('/blog/post/comment/:postId', GetComments);

    // get all total comments (any post)
router.get('/blog/post/comment', GetAllComments);


module.exports = router