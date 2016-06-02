'use strict';

var yosay = require('yosay'),
    chalk = require('chalk');

module.exports = function() {

    // have Yeoman greet the user.
    this.log(yosay("Hello, you're about to " + chalk.green("create a new Acquia BLT project!") + ",  First answer some simple questions."));

    // Set blt build directory.
    this.buildDir = 'blt';

};
