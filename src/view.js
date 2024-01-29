export const renderItems = (data) => {
  const cardAnimal = document.createElement('ul');
  cardAnimal.classlist.add('container');
  data.forEach(item => {
    cardAnimal.innerHTML += `
    <li intemscope itemtype= "croche" class="container">
      <dl intemscope itemtype="#hobby">
        <dt> < img src="${item.imageURL}" alt="imagem do card" itemprop="${item.name}" clas="imagem_card" /> </dt>
        <dt>Nome:</dt> <dd itemprop="name"> ${item.name}</dd>
        <dt>Descrição curta</dt> <dd itemprop="shortDescription"> ${item.facts.shortDescription}</dd>
        <dt>Descrição</dt> <dd itemprop="description"> ${item.facts.Description}</dd>
        <dt>Fatos</dt> <dd itemprop="factions"> ${item.facts.factions}</dd>
      </dl>
    </li>`

  });
  return cardAnimal;
};


