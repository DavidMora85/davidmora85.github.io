//Liaison des champs du formulaire
var h1 = document.getElementById('h1');
var formulaire = document.getElementById('formulaire');
var nomJoueur1 = document.getElementById('nomJoueur1');
var nomJoueur2 = document.getElementById('nomJoueur2');
var formatMatch = document.getElementById('formatMatch');
const valider = document.getElementById('valider');

//Liaison des divisions masquées
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
        panneauScore.style.visibility = "visible";
        panneauBoutons.style.visibility = "visible";
        graphe.style.visibility = "visible";
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
const scoreSetEnCoursJoueur1 = document.getElementById("scoreSetEnCoursJoueur1");
const scoreSetEnCoursJoueur2 = document.getElementById("scoreSetEnCoursJoueur2");
const jeuSet1Joueur1 = document.getElementById("jeuSet1Joueur1");
const jeuSet1Joueur2 = document.getElementById("jeuSet1Joueur2");
const jeuSet2Joueur1 = document.getElementById("jeuSet2Joueur1");
const jeuSet2Joueur2 = document.getElementById("jeuSet2Joueur2");
const jeuSet3Joueur1 = document.getElementById("jeuSet3Joueur1");
const jeuSet3Joueur2 = document.getElementById("jeuSet3Joueur2");
let nbreSetGagnéJoueur1 = 0;
let nbreSetGagnéJoueur2 = 0;
const listeScoreJoueur1 = ["0", "15", "30", "40", "Av."];
const listeScoreJoueur2 = ["0", "15", "30", "40", "Av."];
const listeJeuJoueur1 = ["0", "1", "2", "3", "4", "5", "6", "7"];
const listeJeuJoueur2 = ["0", "1", "2", "3", "4", "5", "6", "7"];
const listeJeuSet = ["0", "1", "2", "3", "4", "5", "6", "7"];

//Déclaration des 4 boutons
const plusJoueur1 = document.getElementById("plusJoueur1");
const moinsJoueur1 = document.getElementById("moinsJoueur1");
const plusJoueur2 = document.getElementById("plusJoueur2");
const moinsJoueur2 = document.getElementById("moinsJoueur2");

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
    data.datasets[0].data.push({x:`${nbrPointsPlayed}`, y:`${pointGrapheJoueur1}`});
    data.datasets[1].data.push({x:`${nbrPointsPlayed}`, y:`${pointGrapheJoueur2}`});
    myChart.update();
    myChart.update();
});

//Action à éxécuter si le bouton - joueur 1 est cliqué
moinsJoueur1.addEventListener("click", () => {
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
    data.datasets[0].data.push({x:`${nbrPointsPlayed}`, y:`${pointGrapheJoueur1}`});
    data.datasets[1].data.push({x:`${nbrPointsPlayed}`, y:`${pointGrapheJoueur2}`});
    myChart.update();
    myChart.update();
});

//Action à éxécuter si le bouton + joueur 2 est cliqué
plusJoueur2.addEventListener("click", () => {
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
    data.datasets[0].data.push({x:`${nbrPointsPlayed}`, y:`${pointGrapheJoueur1}`});
    data.datasets[1].data.push({x:`${nbrPointsPlayed}`, y:`${pointGrapheJoueur2}`});
    myChart.update();
    myChart.update();
});

//Action à éxécuter si le bouton - joueur 2 est cliqué
moinsJoueur2.addEventListener("click", () => {
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
    data.datasets[0].data.push({x:`${nbrPointsPlayed}`, y:`${pointGrapheJoueur1}`});
    data.datasets[1].data.push({x:`${nbrPointsPlayed}`, y:`${pointGrapheJoueur2}`});
    myChart.update();
    myChart.update();
});

function joueur1MarqueLePointNoAd() {
    // Le Joueur 1 marque le point
    pointJoueur1++;
    if (pointJoueur1 < 4) {
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
    }
    else if (pointJoueur1 == 4) {
        //Le joueur 1 marque le jeu, on réinitialise les scores du jeu
        joueur1MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
}

function joueur2MarqueLePointNoAd() {
    // Le Joueur 2 marque le point
    pointJoueur2++;
    if (pointJoueur2 < 4) {
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
    else if (pointJoueur2 == 4) {
        //Le joueur 2 marque le jeu, on réinitialise les scores du jeu
        joueur2MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
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
        // jeuSet3Joueur1.textContent = jeuSet3Joueur1;
        // scoreSet3Joueur2.textContent = jeuSet3Joueur2;
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
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
        // jeuSet3Joueur1.textContent = jeuSet3Joueur1;
        // scoreSet3Joueur2.textContent = jeuSet3Joueur2;
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
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
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
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
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
    else {
        scoreJeuJoueur2.textContent = pointJoueur2;
    }
}

function joueur1MarqueLePoint() {
    // Le Joueur 1 marque le point
    pointJoueur1++;
    if (pointJoueur1 == 1 || pointJoueur1 == 2 || pointJoueur1 == 3) {
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
    }
    else if (pointJoueur1 == 4 && (pointJoueur2 == 0 || pointJoueur2 == 1 || pointJoueur2 == 2)) {
        //Le joueur 1 marque le jeu, on réinitialise les scores du jeu
        joueur1MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
    else if (pointJoueur1 == 4 && pointJoueur2 == 3) {
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
    }
    else if (pointJoueur1 == 4 && pointJoueur2 == 4) {
        pointJoueur1--;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        pointJoueur2--;
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
    else if (pointJoueur1 == 5) {
        //Le joueur 1 marque le jeu, on réinitialise les scores du jeu
        joueur1MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
}

function joueur2MarqueLePoint() {
    // Le Joueur 2 marque le point
    pointJoueur2++;
    if (pointJoueur2 == 1 || pointJoueur2 == 2 || pointJoueur2 == 3) {
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
    else if (pointJoueur2 == 4 && (pointJoueur1 == 0 || pointJoueur1 == 1 || pointJoueur1 == 2)) {
        //Le joueur 2 marque le jeu, on réinitialise les scores du jeu
        joueur2MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
    else if (pointJoueur2 == 4 && pointJoueur1 == 3) {
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
    else if (pointJoueur1 == 4 && pointJoueur2 == 4) {
        pointJoueur1--;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        pointJoueur2--;
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
    else if (pointJoueur2 == 5) {
        //Le joueur 2 marque le jeu, on réinitialise les scores du jeu
        joueur2MarqueLeJeu();
        pointJoueur1 = 0;
        pointJoueur2 = 0;
        scoreJeuJoueur1.textContent = listeScoreJoueur1[pointJoueur1];
        scoreJeuJoueur2.textContent = listeScoreJoueur2[pointJoueur2];
    }
}

function joueur1MarqueLeJeu() {
    jeuJoueur1++;
    if (jeuJoueur1 == 1 || jeuJoueur1 == 2 || jeuJoueur1 == 3 || jeuJoueur1 == 4 || jeuJoueur1 == 5) {
        scoreSetEnCoursJoueur1.textContent = listeJeuJoueur1[jeuJoueur1];
    }
    else if (jeuJoueur1 == 6 && (jeuJoueur2 == 0 || jeuJoueur2 == 1 || jeuJoueur2 == 2 || jeuJoueur2 == 3 || jeuJoueur2 == 4)) {
        //Le joueur 1 gagne le set, on réinitialise le score du set en cours
        joueur1GagneLeSet();
        jeuJoueur1 = 0;
        jeuJoueur2 = 0;
        scoreSetEnCoursJoueur1.textContent = listeJeuJoueur1[jeuJoueur1];
        scoreSetEnCoursJoueur2.textContent = listeJeuJoueur2[jeuJoueur2];
    }
    else if (jeuJoueur1 == 6 && jeuJoueur2 == 5) {
        scoreSetEnCoursJoueur1.textContent = listeJeuJoueur1[jeuJoueur1];
    }
    else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
        //il faut disputer un tie break
        scoreSetEnCoursJoueur1.textContent = listeJeuJoueur1[jeuJoueur1];
    }
    else if (jeuJoueur1 == 7) {
        //Le joueur 1 gagne le set, on réinitialise le score du set en cours
        joueur1GagneLeSet();
        jeuJoueur1 = 0;
        jeuJoueur2 = 0;
        scoreSetEnCoursJoueur1.textContent = listeJeuJoueur1[jeuJoueur1];
        scoreSetEnCoursJoueur2.textContent = listeJeuJoueur2[jeuJoueur2];
    }
}

function joueur2MarqueLeJeu() {
    jeuJoueur2++;
    if (jeuJoueur2 == 1 || jeuJoueur2 == 2 || jeuJoueur2 == 3 || jeuJoueur2 == 4 || jeuJoueur2 == 5) {
        scoreSetEnCoursJoueur2.textContent = listeJeuJoueur2[jeuJoueur2];
    }
    else if (jeuJoueur2 == 6 && (jeuJoueur1 == 0 || jeuJoueur1 == 1 || jeuJoueur1 == 2 || jeuJoueur1 == 3 || jeuJoueur1 == 4)) {
        //Le joueur 2 gagne le set, on réinitialise le score du set en cours
        joueur2GagneLeSet();
        jeuJoueur1 = 0;
        jeuJoueur2 = 0;
        scoreSetEnCoursJoueur1.textContent = listeJeuJoueur1[jeuJoueur1];
        scoreSetEnCoursJoueur2.textContent = listeJeuJoueur2[jeuJoueur2];
    }
    else if (jeuJoueur2 == 6 && jeuJoueur1 == 5) {
        scoreSetEnCoursJoueur2.textContent = listeJeuJoueur2[jeuJoueur2];
    }
    else if (jeuJoueur1 == 6 && jeuJoueur2 == 6) {
        //il faut disputer un tie break
        scoreSetEnCoursJoueur2.textContent = listeJeuJoueur2[jeuJoueur2];
    }
    else if (jeuJoueur2 == 7) {
        //Le joueur 2 gagne le set, on réinitialise le score du set en cours
        joueur2GagneLeSet();
        jeuJoueur1 = 0;
        jeuJoueur2 = 0;
        scoreSetEnCoursJoueur1.textContent = listeJeuJoueur1[jeuJoueur1];
        scoreSetEnCoursJoueur2.textContent = listeJeuJoueur2[jeuJoueur2];
    }
}

function joueur1GagneLeSet() {
    nbreSetGagnéJoueur1++;
    if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 0) {
        jeuSet1Joueur1.textContent = listeJeuSet[jeuJoueur1];
        jeuSet1Joueur2.textContent = listeJeuSet[jeuJoueur2];
    }
    else if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
        jeuSet2Joueur1.textContent = listeJeuSet[jeuJoueur1];
        jeuSet2Joueur2.textContent = listeJeuSet[jeuJoueur2];
    }
    else if (nbreSetGagnéJoueur1 == 2 && nbreSetGagnéJoueur2 == 0) {
        //Le joueur 1 remporte le match
        jeuSet2Joueur1.textContent = listeJeuSet[jeuJoueur1];
        jeuSet2Joueur2.textContent = listeJeuSet[jeuJoueur2];
    }
    else if (nbreSetGagnéJoueur1 == 2 && nbreSetGagnéJoueur2 == 1 ) {
        //Le joueur 1 remporte le match
        jeuSet3Joueur1.textContent = listeJeuSet[jeuJoueur1];
        jeuSet3Joueur2.textContent = listeJeuSet[jeuJoueur2];
    }
}

function joueur2GagneLeSet() {
    nbreSetGagnéJoueur2++;
    if (nbreSetGagnéJoueur2 == 1 && nbreSetGagnéJoueur1 == 0) {
        jeuSet1Joueur1.textContent = listeJeuSet[jeuJoueur1];
        jeuSet1Joueur2.textContent = listeJeuSet[jeuJoueur2];
    }
    else if (nbreSetGagnéJoueur1 == 1 && nbreSetGagnéJoueur2 == 1) {
        jeuSet2Joueur1.textContent = listeJeuSet[jeuJoueur1];
        jeuSet2Joueur2.textContent = listeJeuSet[jeuJoueur2];
    }
    else if (nbreSetGagnéJoueur2 == 2 && nbreSetGagnéJoueur1 == 0) {
        //Le joueur 2 remporte le match
        jeuSet2Joueur1.textContent = listeJeuSet[jeuJoueur1];
        jeuSet2Joueur2.textContent = listeJeuSet[jeuJoueur2];
    }
    else if (nbreSetGagnéJoueur2 == 2 && nbreSetGagnéJoueur1 == 1 ) {
        //Le joueur 2 remporte le match
        jeuSet3Joueur1.textContent = listeJeuSet[jeuJoueur1];
        jeuSet3Joueur2.textContent = listeJeuSet[jeuJoueur2];
    }
}