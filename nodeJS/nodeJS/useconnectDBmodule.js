const client = require("./connectDB");

const db = client.db("employee");

db.collection("customers").find({}).toArray(function(err,res){
    if(err)
       throw err;

    console.log(res);
})



