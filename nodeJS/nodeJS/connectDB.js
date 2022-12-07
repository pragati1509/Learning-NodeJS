const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

client.connect(function(err,db){
    if(err)
      throw err;

    console.log("connected successfully to server");
})

module.exports = client;

