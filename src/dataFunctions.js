// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

// função que faz o filtro (argumentos: conjuto de dados, chave do filtro e o valor dado do filtro)
export const filterTable = (data, filterBy, value) => {
  // eslint-disable-next-line no-undef
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