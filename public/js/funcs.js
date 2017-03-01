

// var arr=[
// {name:"peppperoni", price:5.99, img: "pepperoni.jpg"},
// {name:"chicken alfredo",price:6.99,img:"chickenAlf.jpg"},
// {name:"The works", price:7.99,img:"works.jpg"},
// {name:"Cheese",price:7.99,img:"cheese.jpg"}
// ];
var cartArr;
function generateMenuItems() {
	
	var i=0;
	var htmlPart="";
	for(i = 0, length1 = arr.length; i < length1; i++){
		if(i%3===0)
		{

			htmlPart+='<div class="row top-margin">';		
		}
		htmlPart+='<div class="col-sm-4 text-center"';
		htmlPart+='<p>'+arr[i].name+'</p>';
		var imgName=arr[i].img;
		var str='<img src="./images/'+imgName+'" alt="./images/'+
			imgName+'"' +'class=".img-responsive">';
		htmlPart+=str;
		htmlPart+='<div><button type="button" '+
			' class="btn btn-primary" onclick="buttonSelect('+
			"'"+i+"'"+')" data-toggle="popover" data-content="Add!" >Order</button>'+'</div></div>';
		//onclick="buttonSelect('1')"
		if(i%3===2)
		{

			htmlPart+='</div>';

		}

	}
	var div=document.getElementById("pizzas");
	div.insertAdjacentHTML('afterend', htmlPart);
	generateMenuNum();

}

function generateMenuNum(){
	var numS=localStorage.getItem("num");
	if(numS===null){                                 //isNaN(numS)
		document.getElementById("numItems").textContent=0;
		localStorage.setItem("num",0);
		cartArr=[];
	}
	else
		document.getElementById("numItems").textContent=numS;

}

function getCartItems () {
	arrS=localStorage.getItem("cart");
	if(arrS===null)
		cartArr=[];
	else
	{
	cartArr = JSON.parse("[" + arrS + "]");	
    }
}

function getCartNum () {
numS=localStorage.getItem("num"); //for chrome, it returns not available
 if(isNaN(numS))
	 num=0;
else {
	 num=parseInt(numS);
}
return num;
}

function buttonSelect (id) {
  getCartItems();
 cartArr.push(id);
 var p1=document.getElementById("items");
 p1.innerHTML=cartArr.toString();
 localStorage.setItem("cart",cartArr.toString() );
 numS=localStorage.getItem("num"); //for chrome, it returns not available
 var num=getCartNum()+1;
 localStorage.setItem("num",num);
 var nItemsId=document.getElementById("numItems").textContent=num;



}

function buttonRemove (itemNo) {
 var arrS=localStorage.getItem("cart");
 var arrIndices = JSON.parse("[" + arrS + "]");
 var no=parseInt(itemNo);
 var index = arrIndices.indexOf(no);
 arrIndices.splice(index, 1);
 var div=document.getElementById("cart");
 div.innerHTML='ok';
 ;
// while (div.hasChildNodes()) {
//     div.removeChild(div.firstChild);}

 localStorage.setItem("cart",arrIndices.toString());  
  generateCart();
 // window.location.reload();
 var p1=document.getElementById("items");
 p1.innerHTML=arrIndices.toString();
 var num=getCartNum()-1;
 localStorage.setItem("num",num);
 document.getElementById("numItems").textContent=num; 

}

function generateCart() {
	var i=0;
	var htmlPart="";
	var arrS=localStorage.getItem("cart");
	if(arrS===null)
		htmlPart="You have no items in the cart!";
	else
	{
		var arrIndices = JSON.parse("[" + arrS + "]");
	
	  for(i = 0, length1 = arrIndices.length; i < length1; i++){
	  	itemNo=arrIndices[i];
		 if(i%3===0)
		 {
		 	htmlPart+='<div class="row top-margin">';		
		}
		htmlPart+='<div class="col-sm-4 text-center"';
		htmlPart+='<p>'+arr[itemNo].name+'</p>';
		var imgName=arr[itemNo].img;
		var str='<img src="./images/'+imgName+'" alt="./images/'+
			imgName+'"' +'class=".img-responsive">';
		htmlPart+=str;
		// htmlPart+='<div><button type="button" '+
		// 	' class="btn btn-primary" onclick="buttonRemove('+
		// 	"'"+itemNo+"'"+')">Remove</button>'+'</div></div>';

		htmlPart+='<div><button type="button" '+
			' class="btn btn-primary" onclick="buttonRemove('+
			"'"+itemNo+"'"+')">Remove</button>'+'</div></div>';
	
		if(i%3===2)
		{
			htmlPart+='</div>';
		}
	  }
	}
	//htmlPart=localStorage.getItem("cart");
	var div=document.getElementById("cart");
	div.innerHTML=htmlPart;
	//div.insertAdjacentHTML('afterend', htmlPart);
}
function removetry () {
	var div=document.getElementById('pizzas');
	while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);}
}

function clearStorage() {
	localStorage.clear(); 
}