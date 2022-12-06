var express = require('express');   //module

var app = express(); //service/function

app.get("/",function(req,res){
    res.send("Welcome");
});
