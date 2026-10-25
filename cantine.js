// 2- Déclaration des données de la commande
const client="Awa"
const codeduplat= 1
let quantitetexte = "3"
const montantversé = 5000
let quantite = Number(quantitetexte);
// 3- Calculer le montant de la commande
let prixUnitaire
switch (codeduplat) {
    case 1 :
    nomduplat= "Attiéké-poisson"
    prixUnitaire = 1500
    break;
    case 2 :
    nomduplat="Riz-poulet"
    prixUnitaire = 2000
    break;
    case 3 :
    prixUnitaire = 1000
    nomduplat="Alloco-oeuf"
    break;
    default:
}
function calculerTotal ( prixUnitaire,quantite){
    return prixUnitaire*quantite
}
let total = calculerTotal ( prixUnitaire,quantite);
// 4- Afficher le recaputilatif
if (codeduplat<=0){
console.log (`rentrez un numero de plat valide (entre 1 et 3) s'il vous plait`);
}else if(codeduplat<=3){
console.log(`NOM DU CLIENT : ${client}`);
console.log(`LES DIFFERENTES PORTIONS COMMANDEES :`);
for(i=1;i<=quantite;i+=1){
console.log( `portion ${i} de : ${nomduplat} fait: ${prixUnitaire} F CFA.`);
}
console.log (`TOTAL DE LA COMMANDE : ${total} F CFA.`);
console.log (`MONTANT VERSE : ${montantversé} F CFA.`);
// NOUVEAU CHOIX DE VARIABLES
let monnaie = montantversé-total;
let manquant = total-montantversé;
 if (total<=montantversé){
console.log(`MONNAIE A RENDRE:${monnaie} FCFA`);
}else{
console.log(`SOMME MANQUANTE:${manquant} FCFA`);
console.log (`VEUILLEZ S'IL VOUS PLAIT AJOUTER LA SOMME DE ${total-montantversé} FCFA POUR AINSI FINALISER VOTRE COMMANDE, MERCI!!!`);
 }
 }
 else{
console.log (`rentrez un numero de plat valide (entre 1 et 3) s'il vous plait`);
}
