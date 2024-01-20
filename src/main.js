import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

function realizarPesquisa() {
    // Obtenha os valores do campo de pesquisa e do filtro de seleção
    var termoPesquisa = document.getElementById('search-input').value;
    var filtroSelecao = document.getElementById('filter-select').value;

    // Realize a lógica de pesquisa ou envie os dados para um servidor, conforme necessário
    alert('Termo de pesquisa: ' + termoPesquisa + '\nFiltro de seleção: ' + filtroSelecao);
}
