
 <!DOCTYPE html>
  <html>
  
    <head>
    <title>Jour08-Job04</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>

    <body>
      <header class="red darken-1">
        <nav class="container red darken-3 row">
          <a href="index.php" class="col s3 center red-text text-lighten-4">Accueil</a> <a  class="col s3 center red-text text-lighten-4"href="index.php">Inscription</a> 
          <a class="col s3 center red-text text-lighten-4" href="index.php">Connexion</a> <a  class="col s3 center red-text text-lighten-4" href="index.php">Rechercher</a>
        </nav>
      </header>
      <section class="container">
        <form class="row container red darken-3  lighten-4 z-depth-3">
          <h2 class="col center s4 offset-s4 red-text text-lighten-4">Inscription</h2>
          <i class="col center s4 offset-s4 material-icons red-text text-lighten-4">prenom</i>
          <input class="col s6 offset-s3 white z-depth-2" type="text" name="prenom" placeholder="Prenom">
          <i class="col center s4 offset-s4 material-icons red-text text-lighten-4">nom</i>
          <input class="col s6 offset-s3 white z-depth-2"type="text" name="nom" placeholder="Nom">
          <i class="col center s4 offset-s4 material-icons red-text text-lighten-4">adresse</i>
          <input class="col s6 offset-s3 white z-depth-2" type="text" name="adresse" placeholder="Votre adresse">
          <i class="col center s4 offset-s4 material-icons red-text text-lighten-4">mot de passe</i>
          <input class="col s6 offset-s3 white z-depth-2" type="password" name="mdp" placeholder="Mot de passe">
          <i class="col center s4 offset-s4 material-icons yellow-text">confirmer</i>
          <input class="col s6 offset-s3 white z-depth-2" type="password" name="remdp" placeholder="Confirmer">
          <b class="col s6 offset-s3 white-text">Centre d'interêts:</b>
        
          <label class="col s4 offset-s3 red-text text-lighten-4">
              <input class="white" type="checkbox" />
              <span>Technologie</span>
          </label>
          <label class="col s4 offset-s3 red-text text-lighten-4">
              <input type="checkbox" />
              <span>Voyage</span>
          </label>   
          <label class="col s4 offset-s3 red-text text-lighten-4">
              <input type="checkbox" />
              <span>Football</span>
          </label>                 
          <label class="col s4 offset-s3 red-text text-lighten-4">
              <input type="checkbox" />
              <span>Actualitée</span>
          </label>
         
        <input class="waves-effect waves-light btn-large red lighten-2 col s4 offset-s4" type="submit" name="env">
        </form>
      </section>   

    <footer class="row red darken-1">
      <a href="index.php" class="col s3 center red-text text-lighten-4">Accueil</a> <a  class="col s3 center red-text text-lighten-4" href="index.php">Inscription</a> 
      <a class="col s3 center red-text text-lighten-4" href="index.php">Connexion</a> <a  class="col s3 center red-text text-lighten-4" href="index.php">Rechercher</a>
    </footer>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>

  </html>
