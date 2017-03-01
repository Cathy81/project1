
var express=require("express");
var router=express.Router();
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());
router.post("/order", function (req,res) {
 	var data=req.app.get('appData');
	console.log("A request from JSON");
	//console.log(req);
 var items=req.body.cart.split(",");
// 	//console.log(items[1]);
 console.log(data.pizzas[items[0]]);
  res.json({orderNumber:1234567, info:"Got it!"});
//res.send("Got it!");
});

module.exports = router;  //misspelled to export, get error: 
							//app.use needs middleware