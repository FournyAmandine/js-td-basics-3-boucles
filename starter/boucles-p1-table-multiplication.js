/* BOUCLES - PRÉPA 1 : Une table de multiplication
Affichez les x premières valeurs de la table de multiplication choisie par l'utilisateur.
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
   "Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"
2. Demandez-lui combien de valeurs il souhaite voir pour cette table :
   "Combien de valeurs souhaitez-vous afficher pour cette table ?"
3. Affichez le résultat avec un titre :
   "Voici les … premières valeurs de la table de multiplication par … :"
N.B. Faites-le de deux manières différentes :
   1°) avec une boucle FOR
   2°) avec une boucle WHILE
*/

// avec FOR
// Commencez par demander à l'utilisateur la table de multiplication souhaitée et le nombre de valeurs à afficher
// Ensuite, utilisez une boucle FOR pour calculer et afficher les x premières valeurs de la table de multiplication

// avec WHILE
// Répétez le même processus avec une boucle WHILE, en demandant à nouveau la table de multiplication et le nombre de valeurs

const table = parseInt(prompt("Quelle table de multiplication souhaitez-vous afficher ?"))
const valeur= parseInt(prompt("Combien de valeurs souhaitez-vous afficher pour cette table ?"))

console.log(`La table de multiplication par ${table}`);
console.log(`Voici les ${valeur} premières valeurs de la table de multiplication par ${table}`)
if (table && valeur){
    if (table > 0 && valeur > 0){
        for (let i = 1; i <=valeur; i++){
            console.log(`${i} * ${table} = ${i*table}`);
        }
    } else {
        console.log("Entrez un nombre positif")
    }
} else {
    console.log("Entrez un nombre entier")
}

/*const table = parseInt(prompt("Entrez un nombre pour avoir sa table de multiplication"))
const valeur= parseInt(prompt("Combien de valeurs souhaitez-vous afficher pour cette table ?"))

console.log(`La table de multiplication par ${table}`);
console.log(`Voici les ${valeur} premières valeurs de la table de multiplication par ${table}`)

let i = 1

if (table && valeur){
    if (table>0 && valeur>0){
        while (i<=valeur) {
            console.log(`${i} * ${table} = ${i*table}`);
            i++;
        }
    } else {
        console.log("Entrez un nombre positif");
    }
} else {
    console.log("Entrez un nombre entier");
}*/
