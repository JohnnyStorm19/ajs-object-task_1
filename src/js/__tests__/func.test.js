import orderByProps from '../sortFunction';

test('Функция правильно работает', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const func = orderByProps(obj, ['name', 'level']);
  expect(func).toEqual(result);
});

test('В функцию передан пустой массив', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const func = orderByProps(obj, []);
  expect(func).toEqual(obj);
});
test('В функцию передан невалидный объект', () => {
  const error = 'Invalid object';
  expect(() => {
    orderByProps(['hello world'], ['hello']);
  }).toThrow(error);
});
test('В функцию передан пустой объект', () => {
  const error = 'Invalid object';
  expect(() => {
    orderByProps({}, ['hello']);
  }).toThrow(error);
});
