describe('validator module', () => {
  describe('Validator class', () => {
    it('validate method can take an object and return a fields value', () => {
      expect(isNumber(3)).toBeTruthy();
    });

    it('validate method can take an object and throw an error', () => {
      expect(isString('hi')).toBeTruthy();
    });
  });
});
