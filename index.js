// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb+srv://tonyhuang12138:<password>@cluster0.ypk43.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";  // connection string goes here

//   MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
//   if(err) { return console.log(err); return;}
  
//     var dbo = db.db("database");
// 	var collection = dbo.collection('companies');
	
// 	console.log("Success!");
// 	db.close();
 
// });

var http = require('http');
var port = process.env.PORT || 3000;
console.log("Should display in console");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
   res.write("<h1>Hello World</h1>");
   res.write ("App deployed");
   res.end();
}).listen(port);


