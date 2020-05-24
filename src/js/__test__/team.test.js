import Team from '../Team';

const Bowerman = { attackDefense: '30/30', health: 100, level: 2 };
const Magican = { attackDefense: '10/40', health: 100, level: 3 };
const Swordman = { attackDefense: '25/20', health: 100, level: 4 };

test('Добавление двух одинаковых персонажей', () => {
  expect(() => {
    const person = new Team();
    person.add(Bowerman);
    person.add(Bowerman);
  }).toThrow(Error);
});

test('Добавление персонажа в команду', () => {
  const person = new Team();
  person.add(Magican);
  expect(person.members.values().next().value).toEqual({ attackDefense: '10/40', health: 100, level: 3 });
  expect(person.members.has(Magican)).toBe(true);
});

test('Добавление всех персонажей в команду', () => {
  const person = new Team();
  person.addAll(Swordman, Bowerman, Magican);
  expect(person.members.values().next().value).toEqual({ attackDefense: '25/20', health: 100, level: 4 },
    { attackDefense: '10/40', health: 100, level: 3 },
    { attackDefense: '30/30', health: 100, level: 2 });
  expect(person.members.has(Swordman, Bowerman, Magican)).toBe(true);
});

test('конвертация set в массив', () => {
  const person = new Team();
  person.addAll(Swordman, Bowerman, Magican);
  person.toArray();
  expect(person.toArray()).toEqual([
    { attackDefense: '25/20', health: 100, level: 4 },
    { attackDefense: '30/30', health: 100, level: 2 },
    { attackDefense: '10/40', health: 100, level: 3 },
  ]);
});
