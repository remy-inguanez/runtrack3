
function showhide()
{	var test =document.querySelector("article");
	if(!test)
	{
	var art = document.createElement("article");
 	var texte = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
  	art.appendChild(texte);
  	document.body.appendChild(art);
  }
  else
  {
  	test.remove();
  }
}
