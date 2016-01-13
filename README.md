# Coffeescript plugin for [Slm](https://github.com/slm-lang/slm)

## Usage

### Basic Usage

#####Coffeescript:

    slm = require 'slm'
    slmCoffee = require 'slm-coffee'
    slmCoffee.register slm.template

#####Javascript:

    var slm = require('slm');
    slmCoffee = require('slm-coffee');
    slmCoffee.register(slm.template);

_Note: slmCoffee.register can take three parameters; template (as above, engineName (default is 'coffee'), and options (see [coffeescript.compile() options](http://coffeescript.org/documentation/docs/command.html#section-5))_

### As an ExpressJS template engine

    express = require('express');
    app = express();
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'slm-coffee');
    ...

If you take this approach, you should note that using "slm-coffee" as a view engine should be done **instead of** using the original "slm" view engine.

The original Slm view engine is called from within the slmCoffee view engine.
