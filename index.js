var coffee, register, slm;

coffee = require('coffee-script');

slm = require('slm');

module.exports = {

  // slmCoffee.register(...) is to keep compatibility with existing Slm plugins
  register: function(template, engineName, options) {
    if (engineName == null) {
      engineName = 'coffee';
    }
    template.registerEmbeddedFunction(engineName, function(string) {
      result = '<script type="text/javascript">';
      result += coffee.compile(string);
      result += '</script>';
      return result;
    });
    return coffee;
  }

  // slmCoffee.__express(...) allows us to register as an ExpressJS template engine
  __express: function(filePath, options, callback) {
    slm.template.registerEmbeddedFunction('coffee', function(string) {
      result = '<script type="text/javascript">';
      result += coffee.compile(string);
      result += '</script>';
      return result;
    });
    return slm.__express(filePath, options, callback);
  }

};
