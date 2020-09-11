
<?php 

	$bd=mysqli_connect("localhost","root","","utilisateurs");
	$req="SELECT * FROM utilisateurs;";
	$query=mysqli_query($bd,$req);
	$res=mysqli_fetch_all($query, MYSQLI_ASSOC);;
	$a=json_encode($res);
	echo $a;
	
?>
