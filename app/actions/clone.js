'use strict';

var clone = require('git-clone');

module.exports = function() {

    var done = this.async();

    clone(
        'https://github.com/acquia/blt.git',
        this.destinationPath(this.buildDir),
        { shallow: true },
        function() { done(); }
    );

};
