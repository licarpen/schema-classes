const { Validator } = require('../lib/Validator');

const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

const dog2 = {
  age: two,
  weight: 20
};

const dog3 = {
  name: 3.14159,
  age: 5,
  weight: '15 lbs'
};

const nameValidator1 = new Validator('name', { type: String, required: true });
const nameValidator2 = new Validator('name', { type: String, required: false });

describe('validator module', () => {
  describe('validate method', () => {
    it('takes an object and returns a fields value', () => {
      expect(nameValidator1.validate(dog)).toEqual('spot');
      expect(nameValidator2.validate(dog)).toEqual('spot');
      expect(nameValidator1.validate(dog2)).toThrowErrorMatchingSnapshot();
      expect(nameValidator2.validate(dog2)).toThrowErrorMatchingSnapshot();
      expect(nameValidator1.validate(dog3)).toEqual('3.14159');
      expect(nameValidator2.validate(dog3)).toEqual('3.14159');
    });

    it('validate method can take an object and throw an error', () => {
      expect(isString('hi')).toBeTruthy();
    });
  });
});
