const express = require('express');
//express app(express object)
const app = express();
const morgan = require('morgan');
app.use(express.urlencoded({extended: true}));
const mongoose = require('mongoose');
const { render } = require('ejs');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const blogRoutes = require('./routes/blogRoutes');

const dbURI = 'mongodb+srv://spell-admin:ahana123@testcluster-eg26r.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {app.listen(3000)})//Listen to requets only after db is connected
    .catch((err) => console.log(err));    
//register view engine
app.set('view engine', 'ejs');
//mongoose and mongo sandbox routes

app.get('/add-blog',(req,res) => {
    const product = new Product({
        title: 'Cup cake soap 2',
        snippet: ' about product',
        body: ' description', 
    });
    product.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) =>{
            console.log(err)
        })
})
 

//app.use(morgan('dev'));

//middleware for static files
app.use(express.static('public'));
const Blog = require('./modals/blog');
app.get('/', (req,res) => {
    Blog.find().sort({ createdAt: -1})
    .then((result) =>
    //res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', { title: 'Home', blogs:result}));
});    

app.get('/about', (req,res) => {
    //res.sendFile('./views/about.html', {root:__dirname});
    res.render('about', {title : 'about'})
});

app.use('/blogs',blogRoutes);


//Example of MiddleWare
app.use((req,res) => {
    res.status(404).render('404', {title : '404'} ); 
});