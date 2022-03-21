
import mongoClient from 'mongodb';

const mongodb = mongoClient.MongoClient;
const mongoDBUrl = "mongodb://localhost:27017/fz";
// Connect to the db
mongodb.connect(mongoDBUrl, (err, db) => {
    let dbo = db.db("fz");
    try {
        dbo.createCollection("sports", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
          });  
    }
    finally{
        db.close();
    }
    

           
});