
function pokedex(id,nom,type)

{	$("#poke").empty();
	$.getJSON('pokemon.json',function(data)

	{		if(id.length==0)

			{
				console.log("pas d'id");
				verid=false;
			}
			else

			{
				verid=true
			}
			if(nom.length==0)

			{
				console.log("pas de nom");
				vername=false;
			}
			else

			{
				vername=true
			}
			if(type=="none")

			{
				console.log("pas de type");
				vertype=false;
			}
			else

			{
				vertype=true
			}
		var poktab = new Array;
		for(i=0; i<data.length; i++)

		{	
			if(verid==true && id==data[i].id && vertype==false && vername==false)

			{
				poktab.push(data[i]);
				break;
			}
			else

			{
				if(verid==true)
				{

				}
				else

				{
					nomfr=data[i].name.french.toUpperCase();
					if(vername==true &&(nomfr.includes(nom.toUpperCase())==true) &&(vertype==false))
					{
						poktab.push(data[i])
					}
					else

					{
						if(vername==false && vertype==true)

						{
							//console.log(data[i].type);
							if(type==data[i].type[0]||type==data[i].type[1])
							{
								poktab.push(data[i]);
							}
						}
						else

						{
							if(nomfr.includes(nom.toUpperCase())==true &&(type==data[i].type[0]||type==data[i].type[1]))

							{
								poktab.push(data[i]);
							}
						}
					}
				}
			}

		}
		console.log(poktab);
		if(poktab.length ==0)

		{
			$("#poke").append("<div id='erreur'>aucun pokemon ne correspond à la description </div>");
		}
		for(j=0; j<poktab.length;j++)
        
		{
			$("#poke").append("<div id='"+j+"'></div>");
			a=$("#"+j);
			a.append(" <h1>Nom : "+poktab[j].name.french+"</h1>");
			a.append(" <strong>en anglais ->"+poktab[j].name.english+",</strong>");
			a.append(" <strong>en japonais ->"+poktab[j].name.japanese+",</strong>");
			a.append(" <strong>en chinois ->"+poktab[j].name.chinese+"</strong>");
			a.append("<br>");
			a.append("<u>type:</u>");
			for(k=0; k<poktab[j].type.length; k++)
			{
				a.append("<p>"+poktab[j].type[k]+"</p>");
			}
			a.append("<br>");
			a.append("<i>cappacité :</i>");
			a.append("<p>HP : "+poktab[j].base.HP+"</p>");
			a.append("<p>Attack : "+poktab[j].base.Attack+"</p>");
			a.append("<p>Defense : "+poktab[j].base.Defense+"</p>");
			a.append("<p>Sp. Attack : "+poktab[j].base["Sp. Attack"]+"</p>");
			a.append("<p>Sp. Defense : "+poktab[j].base["Sp. Defense"]+"</p>");
			a.append("<p>speed : "+poktab[j].base.Speed+"</p>");

		}
	});	
}

$("button").click(function()
{	nom=$("#nom").val();
	id=$("#id").val();
	type=$("#type").val();
	console.log(id,nom,type);
	pokedex(id,nom,type);
});
