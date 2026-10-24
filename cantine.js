// 2- Déclaration des données de la commande
const client="Awa"
const codeduplat= 1
let quantitetexte = "3"
const montantversé = 5000
let quantite = Number(quantitétexte)
// 3- Calculer le montant de la commande
let prixUnitaire
switch (codeduplat) {
    case 1 :
    prixUnitaire = 1500
    break;
    case 2 :
    prixUnitaire = 2000
    break;
    case 3 :
    prixUnitaire = 1000
    break;
    default:
}
function calculerTotal ( prixUnitaire,quantite){
    return prixUnitaire*quantite
}

let total = calculerTotal ( prixUnitaire,quantite)