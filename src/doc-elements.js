"use strict";

const contentDiv = document.querySelector('#content');
const tabBox = document.createElement('div');
  tabBox.classList.add('tabBox');
// create tabs  
let tab1 = "About";
let tab2 = "Catalogue";
let tab3 = "Contact";
export let tabs = [tab1, tab2, tab3];

for(let i = 0; i < tabs.length; i++) {
  let tab = document.createElement('li');
  tab.classList.add('tabs' + [i]);
  tab.textContent = tabs[i];
  tabBox.append(tab);
}

//create title
function createHeader() {
  const header = document.createElement('h1');
  header.textContent = "Bamboo Store";
  header.classList.add('header');
  return header;
}


contentDiv.append(createHeader());

//add tabs below header
contentDiv.append(tabBox);


