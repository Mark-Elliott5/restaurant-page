"use strict"

import exterior from './images/raising-canes-exterior.png';

export default function generateHome() {
    const main = document.getElementById('main');
    main.replaceChildren();
    const text = document.createElement('p');
    text.innerText = `Here at Raising Cane's, we fry the best chicken!`;
    const restaurantImage = new Image();
    restaurantImage.src = exterior;
    main.appendChild(text);
    main.appendChild(restaurantImage);
}