'use strict';

var fs = require('fs'),
    randsalt = require('randpass');

module.exports = function() {

    // Set hash salt
    this.getHash = function () {
        if (this.fs.exists(this.templatePath('.hash_salt'))) {
            return this.fs.read(this.templatePath('.hash_salt'))
        }
        var hash_salt = randsalt({length: 55});
        this.fs.write(
            this.templatePath('.hash_salt'),
            hash_salt
        );
        return hash_salt;
    }
    this.props.blt_hash_salt = this.getHash();

    // Create local.drushrc.php
    this.template(
        this.templatePath('default.local.drushrc.php'),
        this.destinationPath(this.buildDir + '/local.drushrc.php'),
        {
            data: this.props
        }
    );

    // Create local.settings.php
    this.template(
        this.templatePath('default.local.settings.php'),
        this.destinationPath(this.buildDir + '/local.settings.php'),
        {
            data: this.props
        }
    );

    // Create project.yml
    this.template(
        this.templatePath('project.yml'),
        this.destinationPath(this.buildDir + '/project.yml'),
        {
            data: this.props
        }
    );

};



