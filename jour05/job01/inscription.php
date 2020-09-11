
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script  type="text/javascript" src="script.js" async="true"></script>
    <link type="text/css" rel="stylesheet" href="style.css"/>
	<title>Inscription</title>
</head>

<body>
<form method="post" action="inscription.php">
	<input type="text" name="nom" id="nom" placeholder="nom">
	<input type="text" name="prenom" id="prenom" placeholder="prenom">
	<input type="text" name="email" id="email" placeholder="email@laplateforme">
	<input type="password" id="psw" name="psd"> 
	<input type="password" id="repsw" name="repsd">
    <button type="submit">Inscription</button>
</form>
</body>

</html>
