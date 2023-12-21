require('dotenv').config()
// Load express
const express = require('express');

// Create our express app
const app = express();

const mongoose = require('mongoose');
const methodOverride = require('method-override');

const toyslist = require('./models/toyslist')

app.set("view engine","jsx");
app.engine("jsx",require("express-react-views").createEngine())
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}))


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
app.use((req,res,next) => {
    console.log('I run for all routes');
    next()
})


// ---------------------------------[Middleware]

app.get('/', function(req, res) {
    res.render('Home')
    // res.send(`<h1>Welcome to our Toys Space</h1>
    // <a href ="/toys">choose your Gifts</a>`);
  });


app.get('/toys', function(req, res) {
    toyslist.find({},(err,toyslist) => {
        res.render('Index',{toys:toyslist});
    });
    
  });

  app.get("/toys/newToy", (req, res) => {
    res.render("NewToy");
  });

  app.post("/toys", (req, res) => {
    toyslist.create(req.body, (err, createToy) => {
      res.redirect("/toys");
    });
  });

  app.get("/toys/:id/edit", (req, res) => {
    toyslist.findById(req.params.id, (err, foundToy) => {
      res.render("EditToys", { toy: foundToy });
    });
  });
  
  app.put("/toys/:id", (req, res) => {
    toyslist.findByIdAndUpdate(req.params.id, req.body, (err, updatedToy) => {
      console.log(updatedToy);
      res.redirect(`/toys/${updatedToy._id}`);
    });
  });
  
  app.delete("/toys/:id", (req, res) => {
    toyslist.findByIdAndRemove(req.params.id, (err, data) => {
      // console.log(data);
      res.redirect("/toys");
    });
  });
  
  app.get("/toys/:id", (req, res) => {
    toyslist.findById(req.params.id, (err, foundToy) => {
      res.render("ViewToys", {
        toy: foundToy,
      });
    });
  });


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
  });