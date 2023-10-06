import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('[2,3,4,5,6] should return [2,4,6]', () => {
    const result = evenNumbers([2, 3, 4, 5, 6]);
    expect(result).toStrictEqual([2, 4, 6]);
  });

  it('[null,2,4,undefined,6] should return [null,2,4,6]', () => {
    const result = evenNumbers([null, 2, 4, undefined, 6]);
    expect(result).toStrictEqual([null, 2, 4, 6]);
  });
});

describe('toDollars', () => {
  it('12 should return $12.00', () => {
    const result = toDollars(12);
    expect(result).toStrictEqual('$12.00');
  });

  it('11.341 should return $11.34', () => {
    const result = toDollars(11.341);
    expect(result).toStrictEqual('$11.34');
  });
});

describe('divideBy', () => {
  it('divideBy([4, 3, 6, 8], 2) should return [4,1.5,3,4]', () => {
    const result = divideBy([4, 3, 6, 8], 2);
    expect(result).toStrictEqual([2, 1.5, 3, 4]);
  });

  it('divideBy([4.0, 3, 6, 8], 3) should return [4,1,2,2.6666666666666665]', () => {
    const result = divideBy([4.0, 3, 6, 8], 3);
    expect(result).toStrictEqual([
      1.3333333333333333, 1, 2, 2.6666666666666665,
    ]);
  });
});

describe('multiplyBy', () => {
  it("divideBy({'Aiden': 23, 'Jack': 24, 'Vampire' : 'Never Dies'}, 3) should return { 'Aiden': 70, 'Jack': 73, 'Vampire': NaN }", () => {
    const result = multiplyBy(
      { Aiden: 23, Jack: 24, Vampire: 'Never Dies' },
      3
    );
    expect(result).toEqual({ Aiden: 69, Jack: 72, Vampire: 'Never Dies' });
  });

  it("divideBy({'Aiden': 23, 'Ben': undefined, 'Vampire' : 'Never Dies'}, 4) should return { 'Aiden': 93, 'Ben': NaN, 'Vampire': NaN }", () => {
    const result = multiplyBy(
      { Aiden: 23, Ben: undefined, Vampire: 'Never Dies' },
      4
    );
    expect(result).toEqual({
      Aiden: 92,
      Ben: undefined,
      Vampire: 'Never Dies',
    });
  });
});
