import { SignUpValidation } from '../validation';

describe('Validation', () => {
  test('should validate email correctly', () => {
    const validation = SignUpValidation('jona@msn.com');
    expect(Object.keys(validation.errors)).not.toContain('email');
  });

  test('should validate email incorrect', () => {
    const validation = SignUpValidation('jona');
    expect(Object.keys(validation.errors)).toContain('email');
  });

  test('should validate passcord correctly', () => {
    const validation = SignUpValidation('', '123456');
    expect(Object.keys(validation.errors)).not.toContain('password');
  });

  test('should validate passcord incorrect', () => {
    const validation = SignUpValidation('jona@msn.com', '123');
    expect(Object.keys(validation.errors)).toContain('password');
  });

  test('should validate password and email correctly', () => {
    const validation = SignUpValidation('jona@msn.com', '123456');
    expect(validation.isValid).toBe(true);
  });
});
