const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://tonyhuang12138:<password>@cluster0.ypk43.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";  // connection string goes here

  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if(err) { return console.log(err); return;}
  
    var dbo = db.db("database");
	var collection = dbo.collection('companies');
	
	console.log("Success!");
	db.close();
 
});


