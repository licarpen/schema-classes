const { Validator } = require('./Validator');

/*
Sample schemaDefinition
name: { type: String, required: true}, 
age: { type: Number, required: true},
weight: {type: String, required: false}});
*/
class Schema {
  constructor(schemaDefinition){
    this.validators = Object.entries(schemaDefinition).map(entry => new Validator(entry[0], entry[1]));
  }

  /*
Sample object
  {name: 'spot',
    age: '5',
    weight: '20 lbs'
  };
validator will have a key called "field" which corresponds to one of the above keys
  */
  validate(object){
    return Object.entries(object).reduce((obj, current) => {
      const validator = this.validators.find(validator => validator.field === current[0]);
      obj[current[0]] = validator.validate(object);
      return obj;
    }, {});
  }
}

module.exports = { Schema };
