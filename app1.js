var express=require("express");
var http=require("http");

var app=express();

var birds = require('./routers/birds');
app.use('/birds', birds);

app.get("/",function(req,res){
		console.log("Coming a request!");
	res.sendFile(`${publicPath}/testJs.html`);
});
http.createServer(app).listen(3000);
console.log('Server is listening at port 3000');
