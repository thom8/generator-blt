'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        this.option('test');
        this.runTests = (this.options.test) ? true : false;
    },

    initializing: require('./actions/init'),
    prompting: require('./actions/prompt'),
    configuring: require('./actions/clone'),
    writing: require('./actions/write'),
    install: require('./actions/install'),
    end: require('./actions/end')

});
