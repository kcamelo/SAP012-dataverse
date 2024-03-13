import { renderItems } from './view.js';
import { filterTable, sortData, countCards } from './dataFunctions.js';
import data from './data/dataset.js';

// let cardData = [...data];

// print dos cards no site 

// Declara e armazena os objetos e botões
const filtroAnimal = document.querySelector('#filtroOrdemAnimal');
const ordemAlfabetica = document.querySelector('#ordemAlfabetica');
const botaoReset = document.querySelector('#resetButton');
const cardAnimal = document.querySelector('#root');
const qtdeCards = document.querySelector('#quantidadeCards');
//document.addEventListener("DOMContentLoaded", () => {
//  cardAnimal.appendChild(renderItems(data));
//});

// const resetButton = document.querySelector('#search-button');

// print dos cards no site
const printCards = (dados) => {
  cardAnimal.innerHTML = "";
  cardAnimal.appendChild(renderItems(dados));
};

//  função que filtra, ordena e printa os dados da base
function filtraOrdenaCards() {
  
  // Lê o que está armazenado nos botões de filtro e ordenação
  const ordemSelecionada = filtroAnimal.value;
  const sortSelecionado = ordemAlfabetica.value;
  
  // Inicializa a variável dadosFiltrados. Isso é necessário caso não seja feito nenhum filtro, não dar pau na função sortData
  // let reatribuindo o valor 
  let dadosFiltrados = data;
  if (ordemSelecionada !== '') {
    // Realiza o filtro da base pela coluna ordemAnimal
    dadosFiltrados = filterTable(data, 'ordemAnimal', ordemSelecionada);
  }
  // Ordena a base pela coluna name
  dadosFiltrados = sortData(dadosFiltrados, 'ordemAnimal', sortSelecionado);
  // Printa os cards
  printCards(dadosFiltrados);

  // Printa a quantidade de cards que foram encontrados. Por questão de singular e plural, é feito um if para um texto específico para apenas um animal encontrado
  const qtdeAnimais = countCards(dadosFiltrados);
  if (qtdeAnimais === 1) {
    qtdeCards.textContent = 'Foi encontrado 1 animal.';
  }
  else {
    qtdeCards.textContent = 'Foram encontrados ' + qtdeAnimais + ' animais.';
  }
}

// Evento chamado ao clicar no botão de Limpar (Reset)
botaoReset.addEventListener('click', (event) => { 
  console.log(event); 
  // Reinicializa os botões de filtro e ordenação
  filtroAnimal.value = '';
  ordemAlfabetica.value = 'asc';
  qtdeCards.textContent = '';
  // Printa a base completa novamente
  printCards(data); 
});

// Primeiro print ao abrir o site
printCards(data);

// Eventos que chamam a função filtraOrdenaCards ao modificar os botões de filtro e ordenação
filtroAnimal.addEventListener('change', () => filtraOrdenaCards());
ordemAlfabetica.addEventListener('change', () => filtraOrdenaCards());







