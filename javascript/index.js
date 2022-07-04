//Liaison des champs du formulaire
var h1 = document.getElementById('h1');
var formulaire = document.getElementById('formulaire');
var nomJoueur1 = document.getElementById('nomJoueur1');
var nomJoueur2 = document.getElementById('nomJoueur2');
var formatMatch = document.getElementById('formatMatch');
const valider = document.getElementById('valider');
var faq = document.getElementById('faq');

//Liaison des divisions masquées
var fenetrePrincipale = document.getElementById('fenetrePrincipale');
var panneauScore = document.getElementById('panneauScore');
var panneauBoutons = document.getElementById('panneauBoutons');
var graphe = document.getElementById('graphe');

//Préparation pour afficher le nom des joueurs
var affichageNomJoueur1 = document.getElementById('affichageNomJoueur1');
var affichageNomJoueur2 = document.getElementById('affichageNomJoueur2');
var affNomJoueur1 = document.getElementById('affNomJoueur1');
var affNomJoueur2 = document.getElementById('affNomJoueur2');
var affGrapheNomJoueur1 = "";
var affGrapheNomJoueur2 = "";

//Déclaration de la variable pour le format du match
var valeurFormatMatch = "";

//Action à effectuer quand l'utilisateur a fini de remplir le formulaire
valider.addEventListener('click', (e) => {
    e.preventDefault();
    //Test si l'utilisateur a bien rempli les noms des joueurs
    if (nomJoueur1.value != "" && nomJoueur2.value != "") {
        //Récupération du nom des 2 joueurs
        valeurFormatMatch = formatMatch.options[formatMatch.selectedIndex].value;
        affichageNomJoueur1.textContent = nomJoueur1.value;
        affichageNomJoueur2.textContent = nomJoueur2.value;
        affNomJoueur1.textContent = nomJoueur1.value;
        affNomJoueur2.textContent = nomJoueur2.value;
        affGrapheNomJoueur1 = nomJoueur1.value;
        affGrapheNomJoueur2 = nomJoueur2.value;

        //Affectation dans la légende du graphe
        data.datasets[0].label = affGrapheNomJoueur1;
        data.datasets[1].label = affGrapheNomJoueur2;
        myChart.update();
        
        //Modification de la page
        h1.style.display = "none";
        formulaire.style.display = "none";
        faq.style.display = "none";
        fenetrePrincipale.style.visibility = "visible";
    }
    else {
        alert('Veuillez rentrer un nom pour chaque joueur');
    }
})

//Déclaration des variables pour le calcul du score
let pointJoueur1 = 0;
let pointJoueur2 = 0;
let jeuJoueur1 = 0;
let jeuJoueur2 = 0;
const scoreJeuJoueur1 = document.getElementById("scoreJeuJoueur1");
const scoreJeuJoueur2 = document.getElementById("scoreJeuJoueur2");
const jeuSet1Joueur1 = document.getElementById("jeuSet1Joueur1");
const jeuSet1Joueur2 = document.getElementById("jeuSet1Joueur2");
const jeuSet2Joueur1 = document.getElementById("jeuSet2Joueur1");
const jeuSet2Joueur2 = document.getElementById("jeuSet2Joueur2");
const jeuSet3Joueur1 = document.getElementById("jeuSet3Joueur1");
const jeuSet3Joueur2 = document.getElementById("jeuSet3Joueur2");
let nbreSetGagnéJoueur1 = 0;
let nbreSetGagnéJoueur2 = 0;
const listeScore = ["0", "15", "30", "40", "Av."];
const listeJeu = ["0", "1", "2", "3", "4", "5", "6", "7"];

//Déclaration des valeurs de backup
let backupPointJoueur1;
let backupPointJoueur2;
let backupJeuJoueur1;
let backupJeuJoueur2;
let backupNbreSetGagnéJoueur1;
let backupNbreSetGagnéJoueur2;
var backupSet1Joueur1 = "";
var backupSet2Joueur1 = "";
var backupSet3Joueur1 = "";
var backupSet1Joueur2 = "";
var backupSet2Joueur2 = "";
var backupSet3Joueur2 = "";
let backupNbrPointsPlayed;
let backupPointGrapheJoueur1;
let backupPointGrapheJoueur2;

//Déclaration des 4 boutons
const plusJoueur1 = document.getElementById("plusJoueur1");
const moinsJoueur1 = document.getElementById("moinsJoueur1");
const plusJoueur2 = document.getElementById("plusJoueur2");
const moinsJoueur2 = document.getElementById("moinsJoueur2");
const annuler = document.getElementById("annuler");

//Déclaration des variables pour le graphe
var nbrPointsPlayed = 0;
var pointGrapheJoueur1 = 0;
var pointGrapheJoueur2 = 0;

//Déclaration des data pour le graphe
var data = {
    datasets: [{
      label: 'Joueur 1',
      backgroundColor: 'mediumseagreen',
      borderColor: 'mediumseagreen',
      data: [{x:'0', y:'0'}]
    },{
        label: 'Joueur 2',
        backgroundColor: 'steelblue',
        borderColor: 'steelblue',
        data: [{x:'0', y:'0'}]
    }]
};

//Déclaration de la config pour le graphe
var config = {
    type: 'line',
    data: data,
    options: {}
};

//Construction du graphe
const myChart = new Chart(
    document.getElementById('monGraphique'),
    config
);

//Action à éxécuter si le bouton + joueur 1 est cliqué
plusJoueur1.addEventListener("click", () => {
    //On stocke les valeurs actuelles dans le backup
    mettreEnBackup();

    //Action sur le score
    if (valeurFormatMatch == 'format1') {
        if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur1MarqueLePointTieBreak();
        }
        else {
            joueur1MarqueLePoint();
        }
    }
    else if (valeurFormatMatch == 'format2') {
        if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
            joueur1MarqueLePointSuperTieBreak();
        }
        else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur1MarqueLePointTieBreak();
        }
        else {
            joueur1MarqueLePoint();
        }
    }
    else {
        if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
            joueur1MarqueLePointSuperTieBreak();
        }
        else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur1MarqueLePointTieBreak();
        }
        else {
            joueur1MarqueLePointNoAd();
        }
    }
    
    //Action sur le graphe
    nbrPointsPlayed++;
    pointGrapheJoueur1++;
    data.datasets[0].data.push({x:`${scoreJeuJoueur1.innerText}/${scoreJeuJoueur2.innerText} ${jeuSet1Joueur1.innerText}/${jeuSet1Joueur2.innerText} ${jeuSet2Joueur1.innerText}/${jeuSet2Joueur2.innerText} ${jeuSet3Joueur1.innerText}/${jeuSet3Joueur2.innerText} (${nbrPointsPlayed})`, y:`${pointGrapheJoueur1}`});
    data.datasets[1].data.push({x:`${scoreJeuJoueur1.innerText}/${scoreJeuJoueur2.innerText} ${jeuSet1Joueur1.innerText}/${jeuSet1Joueur2.innerText} ${jeuSet2Joueur1.innerText}/${jeuSet2Joueur2.innerText} ${jeuSet3Joueur1.innerText}/${jeuSet3Joueur2.innerText} (${nbrPointsPlayed})`, y:`${pointGrapheJoueur2}`});
    myChart.update();
    myChart.update();
});

//Action à éxécuter si le bouton - joueur 1 est cliqué
moinsJoueur1.addEventListener("click", () => {
    //On stocke les valeurs actuelles dans le backup
    mettreEnBackup();

    //Action sur le score
    if (valeurFormatMatch == 'format1') {
        if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur2MarqueLePointTieBreak();
        }
        else {
            joueur2MarqueLePoint();
        }
    }
    else if (valeurFormatMatch == 'format2') {
        if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
            joueur2MarqueLePointSuperTieBreak();
        }
        else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur2MarqueLePointTieBreak();
        }
        else {
            joueur2MarqueLePoint();
        }
    }
    else {
        if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
            joueur2MarqueLePointSuperTieBreak();
        }
        else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur2MarqueLePointTieBreak();
        }
        else {
            joueur2MarqueLePointNoAd();
        }
    }

    //Action sur le graphe
    nbrPointsPlayed++;
    pointGrapheJoueur1--;
    data.datasets[0].data.push({x:`${scoreJeuJoueur1.innerText}/${scoreJeuJoueur2.innerText} ${jeuSet1Joueur1.innerText}/${jeuSet1Joueur2.innerText} ${jeuSet2Joueur1.innerText}/${jeuSet2Joueur2.innerText} ${jeuSet3Joueur1.innerText}/${jeuSet3Joueur2.innerText} (${nbrPointsPlayed})`, y:`${pointGrapheJoueur1}`});
    data.datasets[1].data.push({x:`${scoreJeuJoueur1.innerText}/${scoreJeuJoueur2.innerText} ${jeuSet1Joueur1.innerText}/${jeuSet1Joueur2.innerText} ${jeuSet2Joueur1.innerText}/${jeuSet2Joueur2.innerText} ${jeuSet3Joueur1.innerText}/${jeuSet3Joueur2.innerText} (${nbrPointsPlayed})`, y:`${pointGrapheJoueur2}`});
    myChart.update();
    myChart.update();
});

//Action à éxécuter si le bouton + joueur 2 est cliqué
plusJoueur2.addEventListener("click", () => {
    //On stocke les valeurs actuelles dans le backup
    mettreEnBackup();

    //Action sur le score
    if (valeurFormatMatch == 'format1') {
        if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur2MarqueLePointTieBreak();
        }
        else {
            joueur2MarqueLePoint();
        }
    }
    else if (valeurFormatMatch == 'format2') {
        if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
            joueur2MarqueLePointSuperTieBreak();
        }
        else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur2MarqueLePointTieBreak();
        }
        else {
            joueur2MarqueLePoint();
        }
    }
    else {
        if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
            joueur2MarqueLePointSuperTieBreak();
        }
        else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur2MarqueLePointTieBreak();
        }
        else {
            joueur2MarqueLePointNoAd();
        }
    }

    //Action sur le graphe
    nbrPointsPlayed++;
    pointGrapheJoueur2++;
    data.datasets[0].data.push({x:`${scoreJeuJoueur1.innerText}/${scoreJeuJoueur2.innerText} ${jeuSet1Joueur1.innerText}/${jeuSet1Joueur2.innerText} ${jeuSet2Joueur1.innerText}/${jeuSet2Joueur2.innerText} ${jeuSet3Joueur1.innerText}/${jeuSet3Joueur2.innerText} (${nbrPointsPlayed})`, y:`${pointGrapheJoueur1}`});
    data.datasets[1].data.push({x:`${scoreJeuJoueur1.innerText}/${scoreJeuJoueur2.innerText} ${jeuSet1Joueur1.innerText}/${jeuSet1Joueur2.innerText} ${jeuSet2Joueur1.innerText}/${jeuSet2Joueur2.innerText} ${jeuSet3Joueur1.innerText}/${jeuSet3Joueur2.innerText} (${nbrPointsPlayed})`, y:`${pointGrapheJoueur2}`});
    myChart.update();
    myChart.update();
});

//Action à éxécuter si le bouton - joueur 2 est cliqué
moinsJoueur2.addEventListener("click", () => {
    //On stocke les valeurs actuelles dans le backup
    mettreEnBackup();

    //Action sur le score
    if (valeurFormatMatch == 'format1') {
        if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur1MarqueLePointTieBreak();
        }
        else {
            joueur1MarqueLePoint();
        }
    }
    else if (valeurFormatMatch == 'format2') {
        if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
            joueur1MarqueLePointSuperTieBreak();
        }
        else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur1MarqueLePointTieBreak();
        }
        else {
            joueur1MarqueLePoint();
        }
    }
    else {
        if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
            joueur1MarqueLePointSuperTieBreak();
        }
        else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
            joueur1MarqueLePointTieBreak();
        }
        else {
            joueur1MarqueLePointNoAd();
        }
    }
    
    //Action sur le graphe
    nbrPointsPlayed++;
    pointGrapheJoueur2--;
    data.datasets[0].data.push({x:`${scoreJeuJoueur1.innerText}/${scoreJeuJoueur2.innerText} ${jeuSet1Joueur1.innerText}/${jeuSet1Joueur2.innerText} ${jeuSet2Joueur1.innerText}/${jeuSet2Joueur2.innerText} ${jeuSet3Joueur1.innerText}/${jeuSet3Joueur2.innerText} (${nbrPointsPlayed})`, y:`${pointGrapheJoueur1}`});
    data.datasets[1].data.push({x:`${scoreJeuJoueur1.innerText}/${scoreJeuJoueur2.innerText} ${jeuSet1Joueur1.innerText}/${jeuSet1Joueur2.innerText} ${jeuSet2Joueur1.innerText}/${jeuSet2Joueur2.innerText} ${jeuSet3Joueur1.innerText}/${jeuSet3Joueur2.innerText} (${nbrPointsPlayed})`, y:`${pointGrapheJoueur2}`});
    myChart.update();
    myChart.update();
});

function mettreEnBackup() {
    backupPointJoueur1 = pointJoueur1;
    backupPointJoueur2 = pointJoueur2
    backupJeuJoueur1 = jeuJoueur1;
    backupJeuJoueur2 = jeuJoueur2;
    backupNbreSetGagnéJoueur1 = nbreSetGagnéJoueur1;
    backupNbreSetGagnéJoueur2 = nbreSetGagnéJoueur2;

    backupSet1Joueur1 = jeuSet1Joueur1.textContent;
    backupSet2Joueur1 = jeuSet2Joueur1.textContent;
    backupSet3Joueur1 = jeuSet3Joueur1.textContent;
    backupSet1Joueur2 = jeuSet1Joueur2.textContent;
    backupSet2Joueur2 = jeuSet2Joueur2.textContent;
    backupSet3Joueur2 = jeuSet3Joueur2.textContent;

    backupNbrPointsPlayed = nbrPointsPlayed;
    backupPointGrapheJoueur1 = pointGrapheJoueur1;
    backupPointGrapheJoueur2 = pointGrapheJoueur2;
}

annuler.addEventListener('click', () => {
    //On récupère les anciennes valeurs des différentes variables
    pointJoueur1 = backupPointJoueur1;
    pointJoueur2 = backupPointJoueur2
    jeuJoueur1 = backupJeuJoueur1;
    jeuJoueur2 = backupJeuJoueur2;
    nbreSetGagnéJoueur1 = backupNbreSetGagnéJoueur1;
    nbreSetGagnéJoueur2 = backupNbreSetGagnéJoueur2;

    //On rétablit l'affichage du score
    scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
    scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    jeuSet1Joueur1.textContent = backupSet1Joueur1;
    jeuSet2Joueur1.textContent = backupSet2Joueur1;
    jeuSet3Joueur1.textContent = backupSet3Joueur1;
    jeuSet1Joueur2.textContent = backupSet1Joueur2;
    jeuSet2Joueur2.textContent = backupSet2Joueur2;
    jeuSet3Joueur2.textContent = backupSet3Joueur2;

    //On récupère les anciennes valeurs du graphe
    nbrPointsPlayed = backupNbrPointsPlayed;
    pointGrapheJoueur1 = backupPointGrapheJoueur1;
    pointGrapheJoueur2 = backupPointGrapheJoueur2;

    //On enlève la dernière entrée du graphe
    data.datasets[0].data.pop();
    data.datasets[1].data.pop();
    myChart.update();
})

function joueur1MarqueLePointNoAd() {
    // Le Joueur 1 marque le point
    pointJoueur1++;
    if (pointJoueur1 < 4) {
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
    }
    else if (pointJoueur1 == 4) {
        //Le joueur 1 marque le jeu, on réinitialise les scores du jeu
        joueur1MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
}

function joueur2MarqueLePointNoAd() {
    // Le Joueur 2 marque le point
    pointJoueur2++;
    if (pointJoueur2 < 4) {
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else if (pointJoueur2 == 4) {
        //Le joueur 2 marque le jeu, on réinitialise les scores du jeu
        joueur2MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
}

function joueur1MarqueLePointSuperTieBreak() {
    pointJoueur1++;
    if (pointJoueur1 < 10) {
        scoreJeuJoueur1.textContent = pointJoueur1;
    }
    else if (pointJoueur1 > 9 && pointJoueur1 > (pointJoueur2 +1)) {
        // le joueur 1 gagne le super tie break et donc le match
        jeuSet3Joueur1.textContent = pointJoueur1;
        jeuSet3Joueur2.textContent = pointJoueur2;
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else {
        scoreJeuJoueur1.textContent = pointJoueur1;
    }
}

function joueur2MarqueLePointSuperTieBreak() {
    pointJoueur2++;
    if (pointJoueur2 < 10) {
        scoreJeuJoueur2.textContent = pointJoueur2;
    }
    else if (pointJoueur2 > 9 && pointJoueur2 > (pointJoueur1 +1)) {
        // le joueur 2 gagne le super tie break et donc le match
        jeuSet3Joueur1.textContent = pointJoueur1;
        jeuSet3Joueur2.textContent = pointJoueur2;
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else {
        scoreJeuJoueur2.textContent = pointJoueur2;
    }
}

function joueur1MarqueLePointTieBreak() {
    pointJoueur1++;
    if (pointJoueur1 < 7) {
        scoreJeuJoueur1.textContent = pointJoueur1;
    }
    else if (pointJoueur1 > 6 && pointJoueur1 > (pointJoueur2 +1)) {
        // le joueur 1 gagne le tie break et donc le set
        joueur1MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else {
        scoreJeuJoueur1.textContent = pointJoueur1;
    }
}

function joueur2MarqueLePointTieBreak() {
    pointJoueur2++;
    if (pointJoueur2 < 7) {
        scoreJeuJoueur2.textContent = pointJoueur2;
    }
    else if (pointJoueur2 > 6 && pointJoueur2 > (pointJoueur1 +1)) {
        // le joueur 2 gagne le tie break et donc le set
        joueur2MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else {
        scoreJeuJoueur2.textContent = pointJoueur2;
    }
}

function joueur1MarqueLePoint() {
    // Le Joueur 1 marque le point
    pointJoueur1++;
    if (pointJoueur1 == 1 || pointJoueur1 == 2 || pointJoueur1 == 3) {
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
    }
    else if (pointJoueur1 == 4 && (pointJoueur2 == 0 || pointJoueur2 == 1 || pointJoueur2 == 2)) {
        //Le joueur 1 marque le jeu, on réinitialise les scores du jeu
        joueur1MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else if (pointJoueur1 == 4 && pointJoueur2 == 3) {
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
    }
    else if (pointJoueur1 == 4 && pointJoueur2 == 4) {
        pointJoueur1--;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        pointJoueur2--;
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else if (pointJoueur1 == 5) {
        //Le joueur 1 marque le jeu, on réinitialise les scores du jeu
        joueur1MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
}

function joueur2MarqueLePoint() {
    // Le Joueur 2 marque le point
    pointJoueur2++;
    if (pointJoueur2 == 1 || pointJoueur2 == 2 || pointJoueur2 == 3) {
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else if (pointJoueur2 == 4 && (pointJoueur1 == 0 || pointJoueur1 == 1 || pointJoueur1 == 2)) {
        //Le joueur 2 marque le jeu, on réinitialise les scores du jeu
        joueur2MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else if (pointJoueur2 == 4 && pointJoueur1 == 3) {
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else if (pointJoueur1 == 4 && pointJoueur2 == 4) {
        pointJoueur1--;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        pointJoueur2--;
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
    else if (pointJoueur2 == 5) {
        //Le joueur 2 marque le jeu, on réinitialise les scores du jeu
        joueur2MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScore[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScore[pointJoueur2];
    }
}

function joueur1MarqueLeJeu() {
    jeuJoueur1++;
    if (nbreSetGagnéJoueur1 + nbreSetGagnéJoueur2 == 0) {
        jeuSet1Joueur1.textContent = listeJeu[jeuJoueur1];
        if (jeuJoueur1 == 6 && (jeuJoueur2 == 0 || jeuJoueur2 == 1 || jeuJoueur2 == 2 || jeuJoueur2 == 3 || jeuJoueur2 == 4)) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur1++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
        else if (jeuJoueur1 == 7) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur1++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
    }
    else if (nbreSetGagnéJoueur1 + nbreSetGagnéJoueur2 == 1) {
        jeuSet2Joueur1.textContent = listeJeu[jeuJoueur1];
        if (jeuJoueur1 == 6 && (jeuJoueur2 == 0 || jeuJoueur2 == 1 || jeuJoueur2 == 2 || jeuJoueur2 == 3 || jeuJoueur2 == 4)) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur1++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
        else if (jeuJoueur1 == 7) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur1++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
    }
    else if (nbreSetGagnéJoueur1 + nbreSetGagnéJoueur2 == 2) {
        jeuSet3Joueur1.textContent = listeJeu[jeuJoueur1];
        if (jeuJoueur1 == 6 && (jeuJoueur2 == 0 || jeuJoueur2 == 1 || jeuJoueur2 == 2 || jeuJoueur2 == 3 || jeuJoueur2 == 4)) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur1++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
        else if (jeuJoueur1 == 7) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur1++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
    }
}

function joueur2MarqueLeJeu() {
    jeuJoueur2++;
    if (nbreSetGagnéJoueur1 + nbreSetGagnéJoueur2 == 0) {
        jeuSet1Joueur2.textContent = listeJeu[jeuJoueur2];
        if (jeuJoueur2 == 6 && (jeuJoueur1 == 0 || jeuJoueur1 == 1 || jeuJoueur1 == 2 || jeuJoueur1 == 3 || jeuJoueur1 == 4)) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur2++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
        else if (jeuJoueur2 == 7) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur2++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
    }
    else if (nbreSetGagnéJoueur1 + nbreSetGagnéJoueur2 == 1) {
        jeuSet2Joueur2.textContent = listeJeu[jeuJoueur2];
        if (jeuJoueur2 == 6 && (jeuJoueur1 == 0 || jeuJoueur1 == 1 || jeuJoueur1 == 2 || jeuJoueur1 == 3 || jeuJoueur1 == 4)) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur2++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
        else if (jeuJoueur2 == 7) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur2++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
    }
    else if (nbreSetGagnéJoueur1 + nbreSetGagnéJoueur2 == 2) {
        jeuSet3Joueur2.textContent = listeJeu[jeuJoueur2];
        if (jeuJoueur2 == 6 && (jeuJoueur1 == 0 || jeuJoueur1 == 1 || jeuJoueur1 == 2 || jeuJoueur1 == 3 || jeuJoueur1 == 4)) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur2++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
        else if (jeuJoueur2 == 7) {
            //Le joueur 1 gagne le set, on réinitialise les jeux de chaque joueur
            nbreSetGagnéJoueur2++;
            jeuJoueur1 = 0;
            jeuJoueur2 = 0;
        }
    }
}