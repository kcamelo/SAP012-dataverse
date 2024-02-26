import { renderItems } from './view.js';
import { filterTable, sortData } from './dataFunctions.js';
import data from './data/dataset.js';

// let cardData = [...data];

// print dos cards no site 

const filtroAnimal = document.querySelector('#filtroOrdemAnimal');
const ordemAlfabetica = document.querySelector('#ordemAlfabetica');
const botaoReset = document.querySelector('#resetButton');
const cardAnimal = document.querySelector('#root');
document.addEventListener("DOMContentLoaded", () => {
  cardAnimal.appendChild(renderItems(data));
});

// const resetButton = document.querySelector('#search-button');
// print dos cards no site

const printCards = (dados) => {
  cardAnimal.innerHTML = "";
  cardAnimal.appendChild(renderItems(dados));
};

//  filtrar os dados
function filtraOrdenaCards() {
  const ordemSelecionada = filtroAnimal.value;
  const sortSelecionado = ordemAlfabetica.value;
  let dadosFiltrados = data;
  if (ordemSelecionada !== '') {
    dadosFiltrados = filterTable(data, 'ordemAnimal', ordemSelecionada);
  }
  dadosFiltrados = sortData(dadosFiltrados, 'name', sortSelecionado);
  printCards(dadosFiltrados);
}

botaoReset.addEventListener('click', (event) => { 
  console.log(event); 
  filtroAnimal.value = '';
  ordemAlfabetica.value = 'asc';
  printCards(data); 
});


printCards(data);
filtroAnimal.addEventListener('change', () => filtraOrdenaCards());
ordemAlfabetica.addEventListener('change', () => filtraOrdenaCards());



// let cardData = [...data];
// listaCards.innerHTML = ""
// listaCards.innerHTML = renderItems(cardsFiltrados)
// document.addEventListener("DOMContentLoaded", () => {
//   cardAnimal.appendChild(renderItems(data))
// })




