export const renderItems = (data) => {
  const cardAnimal = document.createElement ('ul');
  cardAnimal.classlist.add ('container');
  data.forEach(item => {
    cardAnimal.innerHTML +=
    <li intemscope itemtype= "croche" class="container">
      <dl intemscope itemtype="#hobby">
        <dt> < img src="${item.imageURL}" alt="imagem do card" itemprop="${item.name}" clas="imagem_card" /> </dt>
        <dt>Nome:</dt> <dd itemprop="name"> ${item.name}</dd>
        <dt>Valor:</dt> <dd itemprop= "custoParaIniciar"> ${item.facts.custoParaIniciar}</dd>
      </dl>
    </li>
    
  });
};

return cardAnimal;
// perguntar para Eli como posso adaptar o trabalho das meninas pro meu