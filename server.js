var express= require('express'),  //to import the express module 
app=express(),                    
port =process.env.PORT||3000; //whatever is the environment variable port or 3000
app.listen(port)

console.log("dbms project restful api")