'use strict';

const page = document.querySelector('#page');
const contact = document.createElement('div');
const contactHeader = document.createElement('h3');
const contactInfo = document.createElement('div');
const message = document.createElement('p');

//add classes
contactHeader.classList.add('headerMenu');
contact.classList.add('page2');
message.classList.add('contactmessage');

//add the page heading
contactHeader.textContent = "Contact";
page.append(contact);
contact.append(contactHeader);

//page information
contact.append(contactInfo);
contactInfo.append(message);