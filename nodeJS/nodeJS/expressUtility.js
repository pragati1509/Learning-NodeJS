var express = require('express');
var client = require("./connectDB");

var app = express();

app.get("/",function(req,res){
    res.send("welcome");
})

app.get("/hello",function(req,res){
    res.send("Hello world");
})

app.get("/user",function(req,res){
      var dbo = client.db("employee");
      var path = {};
      dbo.collection('customers').find({}).toArray(function(err, result) {
           if(err)
             throw err;

           res.json(result);
        });
})


app.listen(8000,function(){
    console.log("connected successfully");
})