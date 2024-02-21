// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, FilterBy, value) => {
  const dadosFiltrados = data.filter(
    (ordem) => ordem.facts.ordemAnimal === value
  );
};

export const anotherExample = () => {
  return [];
};
// renderizar cards pelo root 
const listaCards = document.querySelector("#root")
listaCards.innerHTML = renderItems (data);

let cardsFiltrados = data;

// Filtro de Ordem 
const filtroOrdem = 