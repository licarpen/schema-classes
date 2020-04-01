const { Schema } = require('../lib/Schema');

// validate method returns the object with all fields cast
// validate method throws an error if the object doesn't follow the schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String
  }
});

const dog1 = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

const dog2 = {
  name: 'spot',
  age: 5
};

const dog3 = {
  age: 'pi'
};


describe('schema module', () => {
  describe('validate method for schema', () => {
    it('takes an object and returns a fields value', () => {
      expect(schema.validate(dog1)).toEqual({ name: 'spot', age: 5, weight: '20 lbs' });
      expect(schema.validate(dog2)).toEqual({  name: 'spot', age: 5 });
      expect(() => schema.validate(dog3)).toThrowErrorMatchingSnapshot();
    });
  });
});
