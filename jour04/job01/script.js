
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
