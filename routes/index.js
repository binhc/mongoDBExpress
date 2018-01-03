var express = require('express');
var router = express.Router();
// Connect to mongodb 
// 1. require the module 
// 2. make a mongo client so that express can talk to mongo 
// 3. set up a var for the path to our mongoDB  
// portocal: //host:PORT/DBName
// Actually connect to mongo with
// mongoClient to the mongoUrl 

// console.log(mongoClient)
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient; 
const mongoUrl = 'mongodb://localhost:27017/movieSite'; 
var db; 

// connect takes 2 args:
// 1. where to connect to 
// 2. callback to run when connected, with error and the connected db
mongoClient.connect(mongoUrl, (error, database)=>{
  if (error){
    throw error;
  }else{
    db = database; 
    console.log("Connected to mongo successfully...")
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  // This is a module. So it's not the same as native mongo
  // Unlike the command line:
  // then you can add 'find', 'remove', 'update', etc
  db.collection('movies').find().toArray((error, results)=>{
    res.json(results)
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
