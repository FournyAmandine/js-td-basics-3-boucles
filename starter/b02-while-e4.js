/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/

/*
Affichez les 10 premières valeurs de la table de multiplication choisie par l'utilisateur

1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher.
Vous pouvez utiliser la fonction 'prompt' pour obtenir cette information.

2. Une fois que l'utilisateur a choisi une table de multiplication (par exemple, 7), utilisez une boucle 'while' pour générer les 10 premières valeurs de cette table.
- Initialisez une variable pour représenter le compteur, par exemple 'i', à 1.
- À chaque itération, affichez le calcul et le résultat (par exemple, 7 * 1 = 7) dans la console.
- Incrémentez le compteur 'i' pour passer à la valeur suivante (2, 3, ...).

Pour chaque itération, assurez-vous de vous arrêter après avoir affiché les 10 premières valeurs de la table de multiplication.

// 3. Utilisez un titre approprié pour informer l'utilisateur de ce qui est affiché, par exemple : "Voici les 10 premières valeurs de la table de multiplication par 7."
*/


const table = parseInt(prompt("Entrez un nombre pour avoir sa table de multiplication"))

console.log(`Je voudrais afficher les 10 premières valeurs de la table de multiplication par ${table}`);
console.log(`Voici les 10 premières valeurs de la table de multiplication par ${table}`)

let i = 1

if (table){
    if (table>0){
        while (i<=10) {
            console.log(`${i} * ${table} = ${i*table}`);
            i++;
        }
    } else {
        console.log("Entrez un nombre positif");
    }
} else {
    console.log("Entrez un nombre entier");
}


