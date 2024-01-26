import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const root = document.getElementById("root")
root.innerHTML = renderItems(data);

const selectSubFilter = documet.getElementById("select_SubFilter")
const selectFilter = document.getElementById("select_filter")
selectSubFilter.inner.innerHTML= renderFilter (selectFilter.value)
selectFilter.addEventListener( 'change' fuction {}{
    const itemSelecionado = document.getElementById ("select_ordering").value
    const ordenacao = document.querySelector ('input[name="ordering"]:checked').value;

    
})