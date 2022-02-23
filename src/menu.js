'use strict';

import Parvifolia from './parvifolia.jpg';
import Shoot from './aureosulcataShoot.jpg';
import Yellowgroove from './yellowgroove.jpg';

const page = document.querySelector('#page');
const menu = document.createElement('div');
const menuHeader = document.createElement('h3');
const menuInfo = document.createElement('div');
const catalogue = document.createElement('div');

menuHeader.classList.add('headerMenu');
menu.classList.add('page1');
catalogue.classList.add('catalogue');
menuInfo.classList.add('info2');

//add images
const parv = new Image();
parv.src = Parvifolia;

const groove = new Image();
groove.src = Yellowgroove;

const shoot = new Image();
shoot.src = Shoot;

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
let plant5 = "Sweet Shoot";
let plantCatalogue = [plant1, plant2, plant3, plant4, plant5];

for(let i = 0; i < plantCatalogue.length; i++) {
  const plantCard = document.createElement('div');
  const cardHead = document.createElement('h4');
  let image = document.createElement('div');
  
  plantCard.classList.add('plantList' + [i]);
  image.classList.add('image' + [i]);
  cardHead.classList.add('cardhead');

  catalogue.append(plantCard);
  plantCard.append(cardHead);
  plantCard.append(image);
  cardHead.textContent = plantCatalogue[i];
}

