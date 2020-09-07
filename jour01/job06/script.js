
function fizzbuzz()
{
	for(var i = 1;i <= 151;i++)
	{	console.log(i);
		if(i% 3==0 && i% 5==0)
		{
			console.log(i,"FizzBuzz");
		}
		else
		{
			if(i% 3==0)
			{
				console.log(i,"Buzz");
			}

			if(i% 5==0)
			{
				console.log(i,"Fizz");
			}

			if (i%5!=0 && i% 3!=0) 
			{
				console.log(i);
			}
	
		}
		
	}
}

fizzbuzz();
