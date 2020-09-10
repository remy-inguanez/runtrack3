
$('#button').click(function lecture()
{
		$.ajax(
		{
			url:'expression.txt',
			datatype:'text',
			success: function(data)
			{	$('body').append('<p></p>');
				$('p').text(data);		
			}
		});
});

function jsonValueKey(json,cle)
{	
		$.ajax(
		{
			url:json,
			datatype:'json',
			success: function(data)
			{	
				console.log(data[cle]);		
			}
		});	
}

jsonValueKey("json.json","ville");
