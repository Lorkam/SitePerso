<?php
    if(file_exists("bdd.json")){
        $nomFichier = "bdd.json";
        $contenuFichier = file_get_contents($nomFichier);
        $contenuFichier = json_decode($contenuFichier, true);
    }else{
        $contenuFichier = [];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>afficheBDD</title>
</head>
<body>
    <h1>Affichage de la base de données</h1>
    <div class="affichageBDD">
        <table>
            <tr>
                <th onclick="trierTableau(0)">Nom</th>
                <th onclick="trierTableau(1)">Prénom</th>
                <th onclick="trierTableau(2)">Age</th>
            </tr>
            <?php foreach($contenuFichier as $ligne): ?>
                <tr>
                    <td><?php echo $ligne["nom"] ?></td>
                    <td><?php echo $ligne["prenom"] ?></td>
                    <td><?php echo $ligne["age"] ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
        <label class="recherche" for="recherche">Filtre de recherche</label>
        <input class="recherche" type="search" id="recherche" onkeyup="rechercher()" placeholder="Nom, prénom ou âge">
    </div>
    <script src="script.js" defer></script>
</body>
<link rel="stylesheet" href="style.css">
</html>