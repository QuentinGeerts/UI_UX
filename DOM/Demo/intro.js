// GetElementById
// Récupérer un élément sur base d'un id
// Retour : Element NODE (noeud)
const divInfo1 = document.getElementById('info1');
// console.log(divInfo1);
// console.log(divInfo1.children);
// console.log(divInfo1.children[0]);

// GetElementsByTagName
// Récupérer la liste des éléments qui ont pour balise
// la balise spécifiée
// HTMLCollection
const divs = document.getElementsByTagName('div');
// console.log(divs);
// console.log(divs[0]);
// console.log(divs.info2);
// console.log(divs.length);

// CreateElement
// Créer un élément d'une certaine balise
// <!> Ne l'ajoute pas à la page
// Retour : l'élément créé
const divInfo4 = document.createElement('div');
const pInfo4 = document.createElement('p');
pInfo4.textContent = "Mon texte 4";

// AppendChild
// Ajouter un élément comme enfant de l'élément ciblé
document.body.appendChild(divInfo4);
divInfo4.appendChild(pInfo4);

// InsertBefore
// Insère un élément avant un élément existant
const divInfo2_2 = document.createElement('div');
const pInfo2_2 = document.createElement('p');
pInfo2_2.textContent = "Mon texte 2.2";
divInfo2_2.appendChild(pInfo2_2);

const divInfo3 = document.getElementById('info3');
// insertBefore(élémentAInserer, avantElement)
document.body.insertBefore(divInfo2_2, divInfo3)


// RemoveChild
// Retirer un élément enfant d'un parent
document.body.removeChild(divInfo1);

// Attributes
// GetAttribute
const divInfo2 = document.getElementById('info2');
let titleDivInfo2 = divInfo2.getAttribute("title");

// RemoveAttribute
divInfo2.removeAttribute('title');

// SetAttribute
divInfo2_2.setAttribute('id', 'info2_2');
divInfo4.setAttribute('id', 'info4');

divInfo2.setAttribute('class', 'bg-green');
// Attention remplace l'ancienne classe
divInfo2.setAttribute('class', 'text-red');