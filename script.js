function trierTableau(colonne) {
    let table = document.querySelector("table");
    let lignes = Array.from(table.rows).slice(1); // Exclure l'en-tête

    let ascendant = table.dataset.order === "asc" ? false : true;
    table.dataset.order = ascendant ? "asc" : "desc";

    lignes.sort((a, b) => {
        let valeurA = a.cells[colonne].textContent.trim().toLowerCase();
        let valeurB = b.cells[colonne].textContent.trim().toLowerCase();

        if (!isNaN(valeurA) && !isNaN(valeurB)) { // Comparer comme nombre si possible
            return ascendant ? valeurA - valeurB : valeurB - valeurA;
        }
        return ascendant ? valeurA.localeCompare(valeurB) : valeurB.localeCompare(valeurA);
    });

    // Réinsérer les lignes triées dans le tableau
    for (let ligne of lignes) {
        table.appendChild(ligne);
    }

    // Mise à jour des flèches d'indication du tri
    let entete = table.rows[0].cells[colonne];
    let texteEntete = entete.textContent.replace(" ▲", "").replace(" ▼", "").trim();

    // Réinitialiser les autres en-têtes
    for (let i = 0; i < table.rows[0].cells.length; i++) {
        table.rows[0].cells[i].textContent = table.rows[0].cells[i].textContent.replace(" ▲", "").replace(" ▼", "").trim();
    }

    // Ajouter le bon symbole
    entete.textContent = texteEntete + (ascendant ? " ▲" : " ▼");
}

// à contuner
function rechercher() {
    let input = document.getElementById("recherche").value.toUpperCase();
    let table = document.querySelector("table");
    let lignes = Array.from(table.rows).slice(1); // Exclure l'en-tête

    for (let ligne of lignes) {
        let cellules = Array.from(ligne.cells);
        let texteLigne = cellules.map(cell => cell.textContent.toUpperCase()).join(" "); // Concaténer tout le texte de la ligne
        ligne.style.display = texteLigne.includes(input) ? "" : "none"; // Afficher ou masquer la ligne
    }
}

