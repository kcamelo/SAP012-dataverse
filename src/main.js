import { renderItems } from './view.js';
import { filterTable } from './dataFunctions.js';
import data from './data/dataset.js';

// let cardData = [...data];

// print dos cards no site 


const filtroAnimal = document.querySelector('#filtroOrdemAnimal');
const ordemAlfabetica = document.querySelector('#ordemAlfabetica');
const listaCards = document.querySelector('#root');
document.addEventListener("DOMContentLoaded", () => {
  listaCards.appendChild(renderItems(data));
})

// const resetButton = document.querySelector('#search-button');
// print dos cards no site


const printCards = (data) => {

  listaCards.innerHTML = "";

  listaCards.appendChild(renderItems(data));

};

//  filtrar os dados
const filtraOrdenaCards = () => {

  const ordemSelecionada = filtroAnimal.value;

  const sortSelecionado = ordemAlfabetica.value;

  let dadosFiltrados = data;

  if (ordemSelecionada !== '') {

    dadosFiltrados = filterTable(data, 'ordemAnimal', ordemSelecionada);

  }

  dadosFiltrados = sortData(dadosFiltrados, 'name', sortSelecionado);

  printCards(dadosFiltrados)

};





printCards(data);

filtroAnimal.addEventListener('change', () => filtraOdernaCards());

ordemAlfabetica.addEventListener('change', () => filtraOdernaCards());







// let cardData = [...data];

// listaCards.innerHTML = ""

// listaCards.innerHTML = renderItems(cardsFiltrados)

// document.addEventListener("DOMContentLoaded", () => {

//   cardAnimal.appendChild(renderItems(data))

// })




