import { example, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

export const filterData = (data, filterBy, value) => {
  const dadosFiltrados = data.filter(
    (animal) => animal.facts [filterBy] === value
  );
  return dadosFiltrados;
}
export const sortData = (data, sortBy, sortOrder) => {
  console.log(data.sort())
  data.sort()
  return "sortData"
}