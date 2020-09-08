
function clav (event)
{
	if(!event)
	{

	}
	else
	{
		lettre = document.getElementById('keylogger').value+event.key;
		document.getElementById('keylogger').value=lettre;

	}
	
}
document.body.addEventListener("keyup", clav(event));
