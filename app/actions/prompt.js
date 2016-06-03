'use strict';

var replaceall = require('replaceall');

module.exports = function() {

    var prompts = [

        {
            type: 'input',
            name: 'blt_human_name',
            message: 'What is the human readable project name?',
            default: 'My BLT Project'
        },
        {
            type: 'input',
            name: 'blt_project',
            message: 'and the project machine name?',
            default: function(props) { return replaceall(' ', '_', props.blt_human_name).toLowerCase(); }
        },
        {
            type: 'input',
            name: 'blt_prefix',
            message: 'and the project prefix?',
            default: 'BLT'
        },
        {
            type: 'input',
            name: 'blt_domain',
            message: 'How about the domain name for the project?',
            default: function(props) { return replaceall('_', '-', props.blt_project) + '.local'; }
        },
        {
            type: 'input',
            name: 'blt_profile',
            message: 'and the drupal profile for this project?',
            default: 'lightning'
        },
        {
            type: 'input',
            name: 'blt_db_host',
            message: 'What is the database host for the project?',
            default: 'localhost'
        },
        {
            type: 'input',
            name: 'blt_db_port',
            message: 'What is the database port for the project?',
            default: '3306'
        },
        {
            type: 'input',
            name: 'blt_db_name',
            message: 'What is the database name for the project?',
            default: 'drupal'
        },
        {
            type: 'input',
            name: 'blt_db_user',
            message: 'What is the database username for the project?',
            default: 'root'
        },
        {
            type: 'input',
            name: 'blt_db_pass',
            message: 'What is the database password for the project?'
        },
        {
            type: 'confirm',
            name: 'blt_clean',
            message: 'Do you want to remove the temp blt project directory after the build?',
            default: true
        },
        {
            type: 'confirm',
            name: 'blt_setup',
            message: 'Do want want to run setup for the new project?',
            default: false
        },

    ];

    if (this.runTests) {
        return this.props = {
            blt_human_name: "My BLT Project",
            blt_project: "blt_project",
            blt_prefix: "BLT",
            blt_domain: "blt-project.local",
            blt_profile: "lightning",
            blt_db_host: "localhost",
            blt_db_port: "3306",
            blt_db_name: "drupal",
            blt_db_user: "ubuntu",
            blt_db_pass: "",
            blt_clean: true,
            blt_setup: true
        };
    }

    return this.prompt(prompts).then(function (props) {
        this.props = props;
    }.bind(this));

};
