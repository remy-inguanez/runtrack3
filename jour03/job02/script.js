
function mixer(tab) 
{
    var i = tab.length;
    var temp;
    var rand;
    while (i > 0) 
    {
        rand = Math.floor(Math.random() * i);
        i--;
        temp = tab[i];
        tab[i] = tab[rand];
        tab[rand] = temp;
    }
    return tab;
}

var b = $('#button');

for(var i = 0; i < 6; i++ )
{
	$("#rangees").append("<img src='"+i+".png'/>");
}

b.click(function() 
{
	$("h1").empty();
	$('#rangees').empty();
	tab=mixer([0, 1, 2, 3, 4, 5]);
	$("#melangees").empty();
	for(var i = 0; i < 6; i++ )
	{

		$("#melangees").append("<img class='arc' id='"+tab[i]+"' src='"+tab[i]+".png'/>");
	}
	$('#0').click(function()
	{	$(this).remove();
		$('#rangees').append("<img src='0.png'/>");
		var score=0;
		$('.arc').click(function()
		{
			var id = $(this).attr("id");
			if(id==score+1)
			{
				score++;
				$('#rangees').append("<img src='"+id+".png'/>");
				$(this).remove();
				if(id==5)
					{
						var winer = $("h1").prepend("<b> Vous avez gagné </b>! ");
						winer.css( "color", "green" );
					}
			}
			else
			{
				var winer = $("h1").prepend("<b> Vous avez perdu </b>! ");
				winer.css( "color", "red" );
			}
		})

	})
})
