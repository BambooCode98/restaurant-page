'use strict';

import './doc-elements';
import './style.css';
import './about.js';
import './menu.js';
import './contact.js';


const page = document.querySelector('#page');
const about = document.querySelector('.tabs0');
const menu = document.querySelector('.tabs1');
const contact = document.querySelector('.tabs2');

const aboutPage = document.querySelector('.page0');
const menuPage = document.querySelector('.page1');
const contactPage = document.querySelector('.page2');



about.addEventListener('click', function() {
  aboutPage.style.visibility = 'visible';
  menuPage.style.visibility = 'hidden';
  contactPage.style.visibility = 'hidden';
})

menu.addEventListener('click', function() {
  aboutPage.style.visibility = 'hidden';
  menuPage.style.visibility = 'visible';
  contactPage.style.visibility = 'hidden';
})

contact.addEventListener('click', function() {
  aboutPage.style.visibility = 'hidden';
  menuPage.style.visibility = 'hidden';
  contactPage.style.visibility = 'visible';
})






