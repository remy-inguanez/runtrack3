
<!DOCTYPE html>
<html>

<head>
	<title>job03</title>
	<meta charset="utf-8">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script  type="text/javascript" src="script.js" async="true"></script>
</head>

<body>
	<form method="post" >
		<input id="id" type="text" name="id" placeholder="id">
		<input id="nom" type="text" name="nom" placeholder="nom">
		
		<select id="type" name="type">
			<option value="none">non précisé</option>
			<option value="Fire">feu</option>
			<option value="Water">eau</option>
			<option value="Flying">volant</option>
			<option value="Bug">insect</option>
			<option value="Poison">poison</option>
			<option value="Fairy">fée</option>
			<option value="Normal">normal</option>
			<option value="Grass">plante</option>
			<option value="Ground">terre</option>
			<option value="Fighting">combatant</option>
			<option value="Psychic">psychique</option>
			<option value="Rock">pierre</option>
			<option value="Electric">electric</option>
			<option value="Steel">acier</option>
			<option value="Ice">glace</option>
			<option value="Ghost">fantome</option>
			<option value="Dragon">dragon</option>
		</select>
		
	</form>
	<button  value="filtrer">filtrer</button>
	<section id="poke"></section>
</body>

</html>
