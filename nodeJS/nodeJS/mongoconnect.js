const MongoClient = require('mongodb').MongoClient;  //MongoClient is required to connect to local instance

var url = "mongodb://localhost:27017/employee"; //default url for mongo
//  "mongodb://localhost:portnumber"   default portnumber is 27017

const client = new MongoClient(url);   //connecting to the local mongodb

async function run(){
  // try{
    client.connect();
    // const collection = client.db("employee").collection("customers");
    //  collection.findOne({name:"Pragati Bisen"});
    client.db("employee").collection("customers").findOne({},function(err, result) {
      if (err) throw err;
      console.log(result.name);
      // db.close();
    });
    console.log(first);
    // await client.close();
  // }catch(err){
  //   console.log(err);
  // }
}
run();


// const dataset = collection.find();
    // dataset.forEach((data) => {
    //   console.log(data);
    // });

// MongoClient.connect(url,function(err,db){   //function is a callback which gives two values either success or failure
//   if (err) throw err;
//   console.log("Database created!");
//   var dbo = db.db("employee");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// })



// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("employee");
//     var myobj = { name: "Pragati Bisen", address: "Highway 37" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });

// async function run() {
//   try {
//     await client.connect();
//     const UserCollection = client.db("socialApp").collection("users");
//     const cursor = UserCollection.find({});
//     // console.log("Aggregation query");
//     await cursor.forEach((docs) => {
//       console.log(docs);
//     });
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }
// run();