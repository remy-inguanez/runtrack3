
var a =$('#button');

var test=false;

a.click(function() 

{	
	var txt = $("<p id='texte'></p>").text("le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément."); 
	var butt = $("<button id='reverse'></button>").text("appuyer pour le faire disparaitre."); 
	$("body").append(txt,butt);
	var b=$('#reverse');
	b.click(function()
	{	console.log(b);
		b.remove();
		$('#texte').remove();
	})
    
})
