import { getSkillsAmount } from './getSkillsAmount';

describe('getSkillsAmount()', () => {
  test('correctly calculates skills amount', () => {
    expect(getSkillsAmount(['a','b','c','d'])).toEqual(4);
  });
});
