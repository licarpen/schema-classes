const { getCaster } = require('./types.js');

class Validator {
  constructor(field, configurationObj){
    this.field = field;
    this.configurationObj = configurationObj;
  }

  validate(inputObject){
    if(!(this.field in inputObject) && this.configurationObj.required){
      throw `Object does not have ${this.field} property.`;
    }
    else if(!(this.field in inputObject) && !this.configurationObj.required) return null;
    const castTo = getCaster(this.configurationObj.type);
    return castTo(inputObject[this.field]);
  }
}

module.exports = { Validator };
