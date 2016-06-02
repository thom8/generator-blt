'use strict';

var fs = require('fs-extra');

module.exports = function() {

    if (this.props.blt_clean) {
        // Remove blt directory
        fs.remove(this.destinationPath(this.buildDir));
    }

};
