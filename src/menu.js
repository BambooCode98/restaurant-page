'use strict';

const page = document.querySelector('#page');
const menu = document.createElement('div');
const menuHeader = document.createElement('h3');
const menuInfo = document.createElement('div');
const catalogue = document.createElement('div');

menuHeader.classList.add('headerMenu');
menu.classList.add('page1');
catalogue.classList.add('catalogue');
menuInfo.classList.add('info2');

//add page header
menuHeader.textContent = "Catalogue";
page.append(menu);
menu.append(menuHeader);

//add page info
menu.append(menuInfo);
menuInfo.append(catalogue);

// products list
let plant1 = "Aureosulcata";
let plant2 = "Parvifolia";
let plant3 = "Nigra: 'Henon'";
let plant4 = "Aurea";
let plantCatalogue = [plant1, plant2, plant3, plant4];

for(let i = 0; i < plantCatalogue.length; i++) {
  let plantCard = document.createElement('div');
  plantCard.classList.add('plantList' + [i]);
  plantCard.textContent = plantCatalogue[i];
  catalogue.append(plantCard);
}
