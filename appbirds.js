var express=require("express");
var http=require("http");

var app=express();

var birds = require('./routers/birds');

app.use('/birds', birds);

app.get("/",function(req,res){
		console.log("Coming a request!");
	res.send(`Ok!`);
})
http.createServer(app).listen(3000);