'use strict';

const page = document.querySelector('#page');
const footer = document.querySelector('#footer');
const about = document.createElement('div');
const aboutHeader = document.createElement('h3');
const aboutInfo = document.createElement('div');
const message = document.createElement('p');

//classes
aboutHeader.classList.add('headerMenu');
about.classList.add('page0');
aboutInfo.classList.add('info1');
message.classList.add('message1');

//add page header
aboutHeader.textContent = "About";
page.append(about);
about.append(aboutHeader);

//page info
about.append(aboutInfo);
aboutInfo.append(message);
message.innerHTML = "Welcome to the one stop place for bamboo! Here we sell all varieties of bamboo that exist in the world, even the most rare species! So, the supply will never run out, and you can be guaranteed that our stock is of the highest quality!";

//page footer
page.append(footer);
footer.textContent = "Created by BambooCode98. All photos belong to the author."