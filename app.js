const mysql=require('mysql');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
//create connection obect 
const db = mysql.createConnection({
  host     : 'localhost',//your ip address
  user     : 'root',//write your mysql user here
  password : '**', //write your mysql password here
  database : 'dbms'//your database name
});

//Connect 
db.connect((err)=>{
  if(err)
  {
    throw err;
  }
  console.log('mysql connected');
})

var app = express();

//execute the below code only for one time
//create database if you don't already have one(please comment the dbms line above for this)
/* app.get('/createdb',(req,res)=>{
  let sql='CREATE DATABASE dbms';
  db.query(sql,(err,result)=>
  {
    if(err) throw err;
    console.log(result);
    res.send("Database Created")
  })

}) */
//create table 
/* app.get('/createposttable',(req,res)=>{
  let sql='CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255),body VARCHAR(255 ), PRIMARY KEY(id))';
  db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("posts table is created hurray!!")
  })
})
//insert the post into the table 
app.get('/addpost1',(req,res)=>
{
  let post={title:'Post one',body:'This is post number one'};
  let sql ='INSERT INTO posts SET?'
  let query = db.query(sql,post ,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("Post added")
  })
})
//get all the posts
app.get('/getpost',(req,res)=>
{
  let sql ='SELECT * FROM posts'
  let query = db.query(sql  ,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("Posts fetched")
  })
})
//select a single post
app.get('/updatepost/:id',(req,res)=>
{
  let newtitle="this"
  let sql =`UPDATE posts SET title ='${newtitle}' WHERE id=${(req.params.id)}`
  let query = db.query(sql  ,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("post updated")
  })
})

//update a post 
 */


port =process.env.PORT||3000; 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
