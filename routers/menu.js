var express=require("express");
var router=express.Router();

router.get("/menu",function(req,res, sendData){
	var info=req.app.get('appHeader')+'<div id="pizzas">';
;
	var data=req.app.get('appData');
	var i=0;
 		data.pizzas.forEach( function(item) {
 		if (i%3==0)
	 		info+=`<div class="row top-margin">`;
 		info+=`<div class="col-sm-4 text-center";
		<p>${item.name}</p>
      <img src="./images/${item.img}" alt="./images/${item.img}"
        class=".img-responsive">
		<div><button type="button" class="btn btn-primary" 
		   onclick="buttonSelect(${i})" >Order</button>
		   </div>
		   </div>
		   `;
		if(i%3===2)
		{

			info+='</div>';
		}
		i++;
     
 	});
 		  info+="</div>";
 	info+=req.app.get('appFooter');	  
 	res.send(info);
 	
	});

module.exports = router;  //misspelled to export, get error: 
							//app.use needs middleware