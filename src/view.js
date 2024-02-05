export const renderItems = (data) => {
  const cardAnimal = document.createElement('ul');
  cardAnimal.classlist.add('container');
  data.forEach(item => {
    cardAnimal.innerHTML += `
    <li intemscope itemtype= "croche" class="container">
      <dl intemscope itemtype="#hobby">
        <dt> < img src="${item.imageURL}" alt="imagem do card" itemprop="${item.nameAnimal}" clas="imagem_card" /> </dt>
        <dt>Nome:</dt> <dd itemprop="name"> ${item.nameAnimal}</dd>
        <dt>Descrição curta</dt> <dd itemprop="shortDescription"> ${item.shortDescription}</dd>
        <dt>Descrição</dt> <dd itemprop="description"> ${item.descriptionAnimal}</dd>
        <dt>Fatos</dt> <dd itemprop="facts"> ${item.facts}</dd>
      </dl>
    </li>`

  });
  return cardAnimal;
};


