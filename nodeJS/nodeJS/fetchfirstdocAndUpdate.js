var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err)
      throw err;

    var dbo = db.db("employee");
    dbo.collection("customers").findOne({},function(err,res){
        if(err)
          throw err;
          console.log(res);

        if(res.name=="Pragati Bisen"){
            dbo.collection("customers").findOneAndUpdate({name:"Pragati Bisen"},{$set:{address:"Balaghat M.P."}},function(err,res){
                if(err)
                   throw err;
                console.log("Updated Successfully");
            })
        }
    })
    // db.close();
})