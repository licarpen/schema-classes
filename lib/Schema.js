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
    const errors = [];
    this.validators.forEach(validator => {
      if(validator.configurationObj.required && !object[validator.field]) errors.push(`missing >>${validator.field}<<`);
    });
    const newObject = Object.entries(object).reduce((obj, current) => {
      try {
        const validator = this.validators.find(validator => validator.field === current[0]);
        obj[current[0]] = validator.validate(object);
      }
      catch(error){
        errors.push(error);
      }
      return obj;
    }, {});
    if(errors.length > 0) {
      throw (`Could not validate: ${errors.join(',')}`);
    }
    return newObject;
  }
}

module.exports = { Schema };
