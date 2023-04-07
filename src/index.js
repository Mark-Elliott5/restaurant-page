"use strict"

import Icon from './images/github-mark-white.png';
import './styles.css';

const header = document.createElement('header');
const footer = document.createElement('footer');
const main = document.createElement('main');

header.innerText = `Raising Cane's`;

const githubLink = document.createElement('a');
githubLink.innerText = 'Designed by Mark Elliott';
githubLink.href = 'https://github.com/Mark-Elliott5';
const githubIcon = new Image();
githubIcon.src = Icon;
githubLink.appendChild(githubIcon);
footer.appendChild(githubLink);

const div = document.getElementById('content');
div.appendChild(header);
div.appendChild(main);
div.appendChild(footer);