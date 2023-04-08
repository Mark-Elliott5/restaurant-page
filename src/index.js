"use strict"

import constructHome from  './home.js';
import constructMenu from './menu.js';
import constructContact from './contact.js';
import Icon from './images/github-mark-white.png';
import './styles.css';

// header

const header = document.createElement('header');
header.innerText = `Raising Cane's`;

// nav

const nav = document.createElement('nav');
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');
home.innerText = 'Home';
menu.innerText = 'Menu';
contact.innerText = 'Contact';

// main

const main = document.createElement('main');
main.id = 'main';

// footer

const footer = document.createElement('footer');
const githubLink = document.createElement('a');
githubLink.innerText = 'Designed by Mark Elliott';
githubLink.href = 'https://github.com/Mark-Elliott5';
const githubIcon = new Image();
githubIcon.src = Icon;
githubIcon.classList.add('github-link');
githubLink.appendChild(githubIcon);
footer.appendChild(githubLink);

// page generation

const div = document.getElementById('content');
div.appendChild(header);
div.appendChild(main);
div.appendChild(footer);
constructHome();