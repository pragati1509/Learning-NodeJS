var express = require('express');   //module

var app = express(); //service/function

app.get("/",function(req,res){
    res.send("I'm expressJS");
});

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);
    console.log(port);
    console.log("application runs at http://",host,port);
})
