function sendOrder () {
	arrS=localStorage.getItem("cart");
	if(arrS===null)
		document.getElementById("cart").value="No Item!";
	else
	{
		var data = JSON.stringify({"cart":arrS});
		xhr = new XMLHttpRequest();
		var url = "http://localhost:3000/order";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange=function(){
         if (xhr.readyState==4 && xhr.status==200){
           var obj=JSON.parse(xhr.responseText);
           document.getElementById("cart").innerHTML=obj.orderNumber;
//           document.getElementById("cart").innerHTML=xhr.responseText;
	document.getElementById("data").innerHTML="Your order has been placed!"+arrS;

       }
      }
		
	
		xhr.send(data);
  }

}