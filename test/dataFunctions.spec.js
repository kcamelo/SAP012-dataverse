import { filterTable, sortData, computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


describe('filterTable', () => {

  it('returns `animaisCarnivoros `', () => {
    const filteredData = filterTable(fakeData, 'ordemAnimal', 'Carnivora');
    expect(filteredData.length).toBe(2);
  });

});
describe('sortData', () => {

  it('returns `ordemAscendente`', () => {
    const sortedData = sortData(fakeData, 'ordemAnimal', 'asc')
    expect(sortedData[0].facts.ordemAnimal).toBe('Artiodactyla');
    expect(sortedData[1].facts.ordemAnimal).toBe('Carnivora');
    expect(sortedData[2].facts.ordemAnimal).toBe('Primates');
  });

  it('returns `ordemDescendente`', () => {
    const sortedData = sortData(fakeData, 'ordemAnimal', 'desc')
    expect(sortedData[0].facts.ordemAnimal).toBe('Proboscidea');
    expect(sortedData[1].facts.ordemAnimal).toBe('Primates');
    expect(sortedData[2].facts.ordemAnimal).toBe('Carnivora');
  });
});


describe('computeStats', () => {
  it('returns `quantidade de animais`', () => {
    const data = [
      { generoLivro: 'Carnivora' },
      { generoLivro: 'Carnivora' },
      { generoLivro: 'Carnivora' },
    ];

    const expectedCount = 3;
    const result = computeStats(data);

    expect(result).toBe(expectedCount);
  });
});
