document.querySelector("button").addEventListener("click",love);
function love()
{
	var randomNumber=Math.round(Math.random()*100)+1;
	var person1=document.getElementById("y_name").value;
	var person2=document.getElementById("p_name").value;
	document.querySelector("h1").innerHTML=person1+" loves "+person2+" "+randomNumber+" %";
}