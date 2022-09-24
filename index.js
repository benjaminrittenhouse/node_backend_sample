const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');


const db = require ('./db')
const router = require('./routes/index')

const getBlogs = require("./controller/getBlogs")
const postBlog = require("./controller/PostBlog")
const getBlog = require("./controller/getBlog")
const postComment = require("./controller/PostComment")
const getComments = require("./controller/getComments")



const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection failed...'))

app.use('/api', router)

// get the entire blog (working)
app.get("/blog", (req, res) => {
    getBlogs(req, res);
});

// get blog by id (working)
app.get("/blog/:id", (req, res) => {
    req.body._id = req.params.id;
    getBlog(req, res);
});

// add blog post
app.get("/blog/post/:id/:author/:title/:text", (req, res) => {
    // set id
    req.body.id = req.params.id;
    req.body.author = req.params.author;
    req.body.title = req.params.title;
    req.body.text = req.params.text;
    postBlog(req, res);
});

// add comment to post "id"
app.get("blog/post/comment/:idPost/:id/:author/:text", (req, res) => {
    // set id
    req.body.id = req.params.id;
    req.body.idPost = req.params.idPost;
    req.body.author = req.params.author;
    req.body.text = req.params.text;
    postComment(req, res);
});

// get comment based on post id
app.get("blog/post/comment/:idPost", (req, res) => {
    // set id
    req.body.idPost = req.params.idPost;
    getComments(req, res);
});

app.listen(port, () => console.log(`Server running on ${port}`))