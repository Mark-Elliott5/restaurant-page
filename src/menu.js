"use strict"

export default function generateMenu() {
    const main = document.getElementById('main');
    main.replaceChildren();
    const menuItem1 = document.createElement('p');
    const menuItem2 = document.createElement('p');
    const menuItem3 = document.createElement('p');
    const menuItem4 = document.createElement('p');
    menuItem1.innerText = `1. 3 Finger Combo`;
    menuItem2.innerText = `2. Sandwich Combo`;
    menuItem3.innerText = `3. Box Combo`;
    menuItem4.innerText = `4. Caniac Combo`;
    main.append(menuItem1, menuItem2, menuItem3, menuItem4);
}