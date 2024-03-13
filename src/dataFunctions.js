// A função filterData recebe três parâmetros: 
// 1. data (conjunto de dados a ser filtrado),
// 2. filterBy (a chave pela qual os dados serão filtrados) e 
// 3. value (o valor pelo qual os dados serão filtrados).
// função que faz o filtro (argumentos: conjuto de dados, chave do filtro e o valor dado do filtro)
export const filterTable = (data, filterBy, value) => {
  // Cria o objeto dadosFiltrados que varre a base e seleciona apenas os registros em que a coluna 'filterBy' está preenchida com 'value'
  const dadosFiltrados = data.filter((animal) => animal.facts[filterBy].toLowerCase().includes(value.toLowerCase()));
  return dadosFiltrados;
};
// Esta função sortData recebe três parâmetros: 
// 1. data (conjunto de dados a ser ordenado),
// 2. sortBy (a chave pela qual os dados serão ordenados) e 
// 3. sortOrder (a direção da ordenação).
// Função que ordena a base de dados guiando-se por uma coluna específica. A ordenação pode ser feita de forma crescente ou decrescente
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === 'asc') {
    return data.slice().sort((a, b) => a.facts[sortBy].localeCompare(b.facts[sortBy]));
  } else if (sortOrder === 'desc') {
    return data.slice().sort((a, b) => b.facts[sortBy].localeCompare(a.facts[sortBy]));
  } else {
    return data;
  }
};

// Função que conta quantos cards estão sendo mostrados após o filtro
export const countCards = (data) => {
  const count = data.map(item => item.id).reduce((accumulator) => accumulator + 1, 0);
  return parseInt(count);
};

