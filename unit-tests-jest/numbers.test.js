// import {evenNumbers, toDollars, divideBy, multiplyBy} from './numbers';

const testingEvenNumbers = require('./numbers');

describe('Even Numbers tests', () => {
  test('[2,3,4,5,6] should return [2,4,6]', () => {
    const result = testingEvenNumbers.evenNumbers([2, 3, 4, 5, 6]);
    expect(result).toStrictEqual([2, 4, 6]);
  });

  test('[null,2,4,undefined,6] should return [null,2,4,6]', () => {
    const result = testingEvenNumbers.evenNumbers([null, 2, 4, undefined, 6]);
    expect(result).toStrictEqual([null, 2, 4, 6]);
  });
});

const testingToDollars = require('./numbers');

describe('Even Numbers tests', () => {
  test('12 should return $12.00', () => {
    const result = testingToDollars.toDollars(12);
    expect(result).toStrictEqual('$12.00');
  });

  test('11.341 should return $11.34', () => {
    const result = testingToDollars.toDollars(11.341);
    expect(result).toStrictEqual('$11.34');
  });

  test('undefined should return "Invalid value try again"', () => {
    const result = testingToDollars.toDollars(undefined);
    expect(result).toStrictEqual('Invalid value try again');
  });

  test('NaN should return "Invalid value try again"', () => {
    const result = testingToDollars.toDollars(NaN);
    expect(result).toStrictEqual('Invalid value try again');
  });

  test('"" should return "Invalid value try again"', () => {
    const result = testingToDollars.toDollars('');
    expect(result).toStrictEqual('Invalid value try again');
  });
});

const testingDivideBy = require('./numbers');

describe('Even Numbers tests', () => {
  test('divideBy([4, 3, 6, 8], 2) should return [4,1.5,3,4]', () => {
    const result = testingDivideBy.divideBy([4, 3, 6, 8], 2);
    expect(result).toStrictEqual([4, 1.5, 3, 4]);
  });

  test('divideBy([4, 3, 6, 8], 2) should return [4,1,2,2.6666666666666665]', () => {
    const result = testingDivideBy.divideBy([4.0, 3, 6, 8], 3);
    expect(result).toStrictEqual([4, 1, 2, 2.6666666666666665]);
  });
});

const testingMultiplyBy = require('./numbers');

describe('Even Numbers tests', () => {
  test("divideBy({'Aiden': 23, 'Jack': 24, 'Vampire' : 'Never Dies'}, 3) should return { 'Aiden': 70, 'Jack': 73, 'Vampire': NaN }", () => {
    const result = testingMultiplyBy.multiplyBy(
      { Aiden: 23, Jack: 24, Vampire: 'Never Dies' },
      3
    );
    expect(result).toEqual({ Aiden: 70, Jack: 73, Vampire: NaN });
  });

  test("divideBy({'Aiden': 23, 'Ben': undefined, 'Vampire' : 'Never Dies'}, 4) should return { 'Aiden': 93, 'Ben': NaN, 'Vampire': NaN }", () => {
    const result = testingMultiplyBy.multiplyBy(
      { Aiden: 23, Ben: undefined, Vampire: 'Never Dies' },
      4
    );
    expect(result).toEqual({ Aiden: 93, Ben: NaN, Vampire: NaN });
  });
});
