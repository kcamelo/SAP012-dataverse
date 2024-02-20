import { renderItems } from './view.js';

import data from './data/dataset.js';
const cardAnimal = document.querySelector("#root");
let cardData = [...data];

document.addEventListener("DOMContentLoaded", () =>{
    cardAnimal.appendChild(renderItems(data))
} 
);
