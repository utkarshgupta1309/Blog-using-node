const express = require('express')
const Blog = require('../modals/blog');
const router = express.Router();
var multer = require("multer");
var fs = require("fs");
var storage = multer.memoryStorage()
var upload = multer({dest: 'uploads/', storage: storage })

router.get('/create', (req,res) => {
    res.render('create', { title : 'Create new BaE'})
});

router.get('/', (req,res) => {
    Blog.find().sort({ createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'All blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
});

router.post('/', upload.single("image"), (req,res) => {
    // var blog = new Blog(req.body);
    // blog.img.data = req.file.image.buffer;
    // blog.img.contentType = "image/jpg";
    // blog.save()
    //     .then((result) => {
    //         res.redirect('/blogs')
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    console.log(req.file)
    var obj = {
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body,
        img: {
            data: req.file.buffer,
            contentType: 'image/jpeg'
        }
    }
        Blog.create(obj,(err,item) => {
            item.save();
            res.redirect('/blogs')
        })
})
router.get('/:id', (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details', {blog: result, title: ' Blog details'});
    })
    .catch(err => {
        console.log(err);
    });
})
router.delete('/:id', (req,res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/blogs'})
    })
    .catch((err) => log.error(err))
})


module.exports = router;
