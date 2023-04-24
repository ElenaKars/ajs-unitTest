import sortHeroesByHealth from '../sortHeroesByHealth';

const heroes = [{ name: 'мечник', health: 10 }, { name: 'маг', health: 100 }, { name: 'лучник', health: 80 }];

test('should sort heroes by health in descending order', () => {
  const expected = [{ name: 'маг', health: 100 }, { name: 'лучник', health: 80 }, { name: 'мечник', health: 10 }];
  const sortedHeroes = sortHeroesByHealth(heroes);
  expect(sortedHeroes).toEqual(expected);
});
