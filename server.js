var express=require("express");
var http=require("http");
var path=require("path");
var bodyParser=require("body-Parser");
var data=require("./json/pizzas.json");

var app=express();
app.set('port', 8080);
var publicPath=path.resolve(__dirname, "public"	);

app.use(express.static(publicPath));

app.use(require("./routers/menu"));
app.use(require("./routers/order"));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */


app.get("/",function(req,res){
		console.log("Coming a request!");
	res.sendFile(`${publicPath}/main.html`);
})
app.get("/testJs",function(req,res){
		console.log("Coming a tesrjs request!");
	res.sendFile(`${publicPath}/testJs.html`);
})
app.get("/cart",function(req,res){
		console.log("Coming a cart request!");
	res.sendFile(`${publicPath}/cartModal.html`);
})
app.get("/help",function(req,res){	
	res.sendFile(`${publicPath}/help.html`);
})
app.get("/main",function(req,res){
		console.log("Coming a main request!");
	res.sendFile(`${publicPath}/testJs`);
})

// app.post("/order", function (req,res) {
// 	console.log("Arequest from JSON");
// 	var items=req.body.cart.split(",");
// 	//console.log(items[1]);
//    console.log(data.pizzas[items[0]]);
//    res.json({orderNumber:1234567, info:"Got it!"});
//   //res.send("Got it!");
// });

app.use(function (req,res) {
	console.log("Coming a request!");
	res.statusCode=404;
	res.send("404");
})

http.createServer(app).listen(app.get('port'));
console.log(`Server is running at port ${app.get('port')}`);
var header=`
<head>
	<title>Test Javascript</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="./css/styleB.css">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>
<div class="container">
<div class="page-header">
<div class="row">
  <div class="col-sm-3 col-xs-3"> 
  	<img src="./images/logo1.jpg" alt="logo" style="width:150px;height:150px"> 
  </div>
  <div class="col-sm-7">
  	<ul  class="list-inline">	
			<li><a class="list-inline-item" href="./main">Main</a></li>
			<li><a class="list-inline-item" href="./menu">Menu</a></li>
			<li><a class="list-inline-item" href="./special">Special</a></li>
			<li><a class="list-inline-item" href="./about.html">About</a></li>
	</ul>
   </div>
   <div class="col-sm-2">
		<a href="./cart">
			<img src="./images/cart.png" alt="cart" style="width:60px;height:60px;">
				 <span class="badge" id="numItems">0</span></a>	
   </div>
 
  </div>
</div>

	
		
`;
var footer=`<div class="row"><hr></div>
	
	<footer >
    <div class="list-inline">
		<img src="./images/logo1.jpg" alt="logo" height="100" width="100">
		<a class="list-inline-item" href="./service.html">Customer Service</a>
		<a class="list-inline-item"href="./account.html">Account</a>
		<a class="list-inline-item"href="./special.html">Special</a>
		<a class="list-inline-item"href="./about.html">About</a>
	</div>
		<div class="row">
		<div class="col-sm-3">
		<p>Lorem ipsum Sit amet adipisicing dolor non anim voluptate cillum dolor eu eu ad irure.</p>
		</div>
		<div class="col-sm-3">
			<p>Lorem ipsum Sit amet adipisicing dolor non anim voluptate cillum dolor eu eu ad irure.</p>
		</div>
		<div class="col-sm-3">
			<p>Lorem ipsum Sit amet adipisicing dolor non anim voluptate cillum dolor eu eu ad irure.</p>
		</div>
		<div class="col-sm-3">
			<p id="items">items</p>
			<button type="button" onclick="clearStorage()">clear</button>
		</div>
		</div>
	</footer>
</div>


<script type="text/javascript" src="./js/funcs.js"></script>
<script type="text/javascript">

generateMenuNum();
</script>
</body>
`;

app.set('appFooter',footer);
app.set('appHeader', header);
app.set("appData",data);
// var pizzas=[
// {name:"peppperoni", price:5.99, img: "pepperoni.jpg"},
// {name:"chicken alfredo",price:6.99,img:"chickenAlf.jpg"},
// {name:"The works", price:7.99,img:"works.jpg"},
// {name:"Cheese",price:7.99,img:"cheese.jpg"}
// ];
module.exports.app=app;
module.exports.header=header;


