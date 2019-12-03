import Validator from './lib/Validator.js';

const nameValidator = new Validator('name', {
  type: String,
  required: true
});
  
const ageValidator = new Validator('age', {
  type: String,
  required: true
});
  
const colorValidator = new Validator('color', {
  type: String,
  required: true
});
  
const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};
  
nameValidator.validate(dog) // returns 'spot'
ageValidator.validate(dog) // returns 5
colorValidator.validate(dog) // throws error