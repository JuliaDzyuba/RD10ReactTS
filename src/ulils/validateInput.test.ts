import { validateInput } from './validateInput';

describe('validateInput()', () => {
  test('should return error if value is empty string', () => {
    expect(validateInput('')).toBe("This field is required");
  });
  
  test('should return error if value too short or too long', () => {
    expect(validateInput("aa")).toBe("The value must be at least 3 characters but less then 30 characters");
    expect(validateInput("You want to write maintainable tests")).toBe("The value must be at least 3 characters but less then 30 characters");
  });
});
