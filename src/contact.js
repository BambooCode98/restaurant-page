'use strict';

const page = document.querySelector('#page');
const contact = document.createElement('div');
const contactHeader = document.createElement('h3');
const contactInfo = document.createElement('div');
const message1 = document.createElement('div');
const text1 = document.createElement('p');
const text2 = document.createElement('p');
const text3 = document.createElement('p');



//add classes
contactHeader.classList.add('headerMenu');
contact.classList.add('page2');
message1.classList.add('contactmessage');

contactInfo.classList.add('info3');

//add the page heading
contactHeader.textContent = "Contact";
page.append(contact);
contact.append(contactHeader);

//page information
contact.append(contactInfo);
contactInfo.append(message1);
text1.textContent = "Phone Number: 999-999-9999";
text2.textContent = "Email: Bamboo@bamboo.com";
text3.textContent = "Address: Bamboo Boulevard, Bamboo City, Bamboo Country";


message1.append(text1, text2, text3);