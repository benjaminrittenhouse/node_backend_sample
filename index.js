const express = require('express')
const cors = require('cors')

const db = require ('./db')
const router = require('./routes/index')

const getBlogs = require("./controller/getBlogs")
const postBlog = require("./controller/PostBlog")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection failed...'))

app.use('/api', router)

// get the entire blog
app.get("/blog", (req, res) => {
    getBlogs(req, res);
});

// add blog post
app.get("/blog/post/:id", (req, res) => {
    req.body.id = req.params.id;
    postBlog(req, res);
});

app.listen(port, () => console.log(`Server running on ${port}`))