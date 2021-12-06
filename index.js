const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://tonyhuang12138:Tony123456@cluster0.ypk43.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";  // connection string goes here

// Establish connection
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) { return console.log(err); }

  var dbo = db.db("database");
  var collection = dbo.collection('companies');

  // Read line
  const fs = require('fs');
  const readline = require('readline');
  const file = readline.createInterface({
    input: fs.createReadStream('./companies.csv'),
  });

  let i = 0;
  file.on('line', (line) => {
    if (i != 0) {
      substring = line.split(",");
      var newData = { Company: substring[0], Ticker: substring[1]};
      collection.insertOne(newData, function (err, res) {
        if (err) { console.log("query err: " + err); return; }
        console.log("new document inserted");
      });

    }
    i++;
  });
});





