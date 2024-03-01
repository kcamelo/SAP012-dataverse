// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

// função que faz o filtro (argumentos: conjuto de dados, chave do filtro e o valor dado do filtro)
export const filterTable = (data, filterBy, value) => {
  // Cria o objeto dadosFiltrados que varre a base e seleciona apenas os registros em que a coluna 'filterBy' está preenchida com 'value'
  const dadosFiltrados = data.filter((animal) => animal.facts[filterBy].toLowerCase().includes(value.toLowerCase()));
  return dadosFiltrados;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === 'asc') {
    return data.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortOrder === 'desc') {
    return data.slice().sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  } else {
    return data;
  }
};

export const countCards = (data) => {
  const count = data.map(item => item.id).reduce((accumulator) => accumulator + 1, 0);
  return parseInt(count);
};