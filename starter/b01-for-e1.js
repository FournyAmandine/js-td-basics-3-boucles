/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : initialisez un compteur pour définir OÙ COMMENCER
    - condition : écrivez une condition sur le compteur pour spécifier QUAND ARRÊTER
    - étape : incrémentez le compteur pour définir COMMENT AVANCER dans la boucle
*/

/*
EXEMPLE 1 :
- Affichez les nombres de 1 à 10
  - 1°) sans utiliser de boucle : écrivez toutes les instructions à la main, une par une
  - 2°) en utilisant la boucle FOR
- Écrivez la table d'évolution des variables
*/

// 1°) sans boucle : Écrivez ici toutes les instructions à la main, une par une

// 2°) avec boucle FOR : Écrivez ici le code de la boucle FOR

// N.B. TABLE D'ÉVOLUTION DES VARIABLES :
//   nbre      nbre < =10           console.log(nbre)        nbre++
// nbre = 1,   1 <= 10 true,           affiche 1,          nbre passe à 1+1 = 2
// nbre = 2,   2 <= 10 true,           affiche 2,          nbre passe à 2+1 = 3
// nbre = 3,   3 <= 10 true,           affiche 3,          nbre passe à 3+1 = 4
// nbre = 4,   4 <= 10 true,           affiche 4,          nbre passe à 4+1 = 5
// nbre = 5,   5 <= 10 true,           affiche 5,          nbre passe à 5+1 = 6
// nbre = 6,   6 <= 1à true,           affiche 6,          nbre passe à 6+1 = 7
// nbre = 7,   7 <= 10 true,           affiche 7,          nbre passe à 7+1 = 8
// nbre = 8,   8 <= 10 true,           affiche 8,          nbre passe à 8+1 = 9
// nbre = 9,   9 <= 10 true,           affiche 9,          nbre passe à 9+1 = 10
// nbre = 10,  10 <= 10 true,        affiche 10,         nbre passe à 10+1 = 11
// nbre = 11,  11 <= 10 FALSE,       on sort de la boucle !

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("nbre = 1,   1 <= 10 true,           affiche 1,          nbre passe à 1+1 = 2");
console.log("nbre = 2,   2 <= 10 true,           affiche 2,          nbre passe à 2+1 = 3");
console.log("nbre = 3,   3 <= 10 true,           affiche 3,          nbre passe à 3+1 = 4");
console.log("nbre = 4,   4 <= 10 true,           affiche 4,          nbre passe à 4+1 = 5");
console.log(" nbre = 5,   5 <= 10 true,           affiche 5,          nbre passe à 5+1 = 6");
console.log(" nbre = 6,   6 <= 1à true,           affiche 6,          nbre passe à 6+1 = 7");
console.log("nbre = 7,   7 <= 10 true,           affiche 7,          nbre passe à 7+1 = 8");
console.log("nbre = 8,   8 <= 10 true,           affiche 8,          nbre passe à 8+1 = 9");
console.log("nbre = 9,   9 <= 10 true,           affiche 9,          nbre passe à 9+1 = 10");
console.log("nbre = 10,  10 <= 10 true,        affiche 10,         nbre passe à 10+1 = 11");
console.log("nbre = 11,  11 <= 10 FALSE,       on sort de la boucle !");

for (let i = 1; i <= 10; i++) {
    console.log(`nbre = ${i}, ${i} <= 10 true, affiche ${i}, nbre passe à ${i}+1 = ${i+1}`);
}

console.log("nbre = 11, 11 <= 10 FALSE,  on sort de la boucle !");

/*
for (let i = 1; i <= 10; i++) {
    for (let j = i; i <= i*10; j+=1) {
        console.log(j);
    }
}
*/
