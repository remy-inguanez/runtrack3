
function footscroll()
{
	var bod = document.documentElement.scrollTop;
	var taillesc = document.documentElement.scrollHeight;
	var taillecl = document.documentElement.clientHeight;
	var pourcent = 250-(bod/(taillesc-taillecl))*250;
	var col =  "rgb("+pourcent+",150,50)";

	document.getElementById("footer").style.backgroundColor = col;
}
