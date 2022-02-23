'use strict';

const page = document.querySelector('#page');
const contact = document.createElement('div');
const contactHeader = document.createElement('h3');
const contactInfo = document.createElement('div');

contactHeader.classList.add('headerMenu');
contact.classList.add('page2');

//add the page heading
contactHeader.textContent = "Contact";
page.append(contact);
contact.append(contactHeader);

//page information
contact.append(contactInfo);