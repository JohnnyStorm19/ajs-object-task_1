import orderByProps from './js/sortFunction';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

// eslint-disable-next-line no-console
console.log(orderByProps(obj, ['name', 'defence']));
