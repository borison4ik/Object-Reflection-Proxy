import specialAtack from '../components/specialAtack';

describe('specialAtack function: ', () => {
  test('should return false for object without "special"', () => {
    expect(specialAtack({})).toBeFalsy();
  });

  test('should return new obj with desctiption property', () => {
    const character = {
      special: [
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    const result = [
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ];

    expect(specialAtack(character)).toEqual(result);
  });
});
