'use strict';

module.exports = function() {

    // Install composer dependencies.
    this.spawnCommandSync('composer', ['install'], {
        cwd: this.destinationPath(this.buildDir),
    });

    // Create new blt project.
    this.spawnCommandSync('bash', ['blt.sh', 'create'], {
        cwd: this.destinationPath(this.buildDir),
        shell: true
    });

    if (this.props.blt_setup) {
        // Setup new blt project.
        this.spawnCommandSync('bash', ['blt.sh', 'local:setup'], {
            cwd: this.destinationPath(this.props.blt_project),
            shell: true
        });
    }

};
