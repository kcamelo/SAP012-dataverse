import { renderItems } from './view.js';

import data from './data/dataset.js';
const cardAnimal = document.querySelector("#root");
let cardData = [...data];

document.addEventListener("DOMContentLoaded", () =>{
    cardAnimal.appendChild(renderItems(data))
listaCards.innerHTML = ""
    listaCards.innerHTML = renderItems(cardsFiltrados)
});



//      botão de limpar (limpa seleção mas não limpa ordem T_T )
const limparSeleções = document.getElementById('botaoLimpar');
limparSeleções.addEventListener('click', () => {
    document.getElementById("todos").selected = "true";
    listaCards.innerHTML = renderItems(data)
});