import dataset from "./data/dataset.js";
export const renderItems = (data) => {
  const cardAnimal = document.createElement('ul');
  cardAnimal.classList.add('container');
  data.forEach((item) => {
    console.log(item.facts)
    cardAnimal.innerHTML += `
    <li intemscope itemtype= "zoologicoAnimals" class="container">
      <dl intemscope itemtype="#zoologicoAnimal">
        <dt> <img src="${item.imageUrl}" alt="imagem do card" itemprop="${item.name}" class="imagem_card" /> </dt>
        <dt>Nome:</dt> <dd itemprop="name"> ${item.name}</dd>
        <dt>Descrição curta</dt> <dd itemprop="shortDescription"> ${item.shortDescription}</dd>
        <dt>Descrição</dt> <dd itemprop="description"> ${item.description}</dd>
        <dt>Fatos</dt> <dd itemprop="facts"> ${item.facts.especieAnimal}</dd>
      </dl>
    </li>`

  });
  return cardAnimal;
};


