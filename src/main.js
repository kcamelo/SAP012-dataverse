import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const selectElement = document.querySelector(".ordemAnimal");

selectElement.addEventListener("change", (event) => {
    console.log(`Ordem  ${event.target.value}`);
    console.log(event);
});




