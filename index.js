var coffee = require('coffee-script');
var slm = require('slm');

var DEFAULT_EMBEDDED_NAME = 'coffee';

var register = function(template, engineName, options) {
  if (!engineName) {
    engineName = DEFAULT_EMBEDDED_NAME;
  }
  template.registerEmbeddedFunction(engineName, function(string) {
    result = '<script type="text/javascript">';
    result += coffee.compile(string);
    result += '</script>';
    return result;
  });
  return coffee;
}

var registeredInExpress = false;

module.exports = {

  // slmCoffee.register(...) is to keep compatibility with existing Slm plugins
  register: register,

  // slmCoffee.__express(...) allows us to register as an ExpressJS template engine
  __express: function(filePath, options, callback) {
    // Do not register every call
    if (!registeredInExpress) {
      register(slm.template, DEFAULT_EMBEDDED_NAME);
      registeredInExpress = true;
    }
    return slm.__express(filePath, options, callback);
  }
};
