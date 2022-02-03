import orderByProps from '../components/orderByProps';

describe('orderByProps function: ', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const sortCase = ['name', 'level'];
  const sortCase2 = ['attack', 'name', 'level'];
  const sortedbyArr = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const sortedbyArr2 = [
    { key: 'attack', value: 80 },
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const sortedbyAlphabet = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  test('should sort by 2 arguments array', () => {
    expect(orderByProps(obj, sortCase)).toEqual(sortedbyArr);
  });

  test('should sort by 2 arguments array', () => {
    expect(orderByProps(obj, sortCase2)).toEqual(sortedbyArr2);
  });

  test('should sort by alphabet', () => {
    expect(orderByProps(obj)).toEqual(sortedbyAlphabet);
  });
});
