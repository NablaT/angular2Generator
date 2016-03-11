var generators = require('yeoman-generator');
var lodash = require('lodash');

module.exports = generators.Base.extend({

    /**
     * Function askProjectName asks user the project name.
     * We store the answer in the attribute projectTitle.
     */
    askProjectName: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            store: true,
            default: "MyApp"
        }, function (answers) {
            this.log(answers.name);
            this.projectTitle = answers.name;
            done();
        }.bind(this));
    },

    /**
     * Function askForSass. This function asks to user if he would like to use Sass.
     * We store his answers in the variable sassValue.
     */
    askForSass: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Would you like to use Sass? (Y/N)',
            store: true,
            default: "N" // Default
        }, function (answers) {
            this.sassValue = answers.name;
            done();
        }.bind(this));
    },

    /**
     * Function askForBootstrap. This function asks to user if he would like to use Bootstrap.
     * We store his answers in the variable bootstrapValue.
     */
    askForBootstrap: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Would you like to use Bootstrap? (Y/N)',
            store: true,
            default: "N"  // Default
        }, function (answers) {
            this.bootstrapValue = answers.name;
            done();
        }.bind(this));
    },

    /**
     * Function askForBootstrapVersion. This function asks to users the verison of Bootstrap he would like
     * to use.
     */
    askForBootstrapVersion: function () {
        if (this.bootstrapValue === "Y") {
            var done = this.async();
            this.prompt({
                type: 'input',
                name: 'name',
                message: 'Would you like to use Bootstrap v4 alpha.2? (Y/N)',
                store: true,
                default: "N"  // Default
            }, function (answers) {
                if (answers.name === "N") {
                    this.log("Bootstrap v3.3.6");
                }
                else {
                    this.log("Bootstrap v4 alpha.2");
                }
                this.versionBoostrap = answers.name;
                done();
            }.bind(this));
        }
    },

    /**
     * Function askForFoundation. This function asks to user if he would like to use Foundation.
     * We store his answers in the variable foundationValue.
     */
    askForFoundation: function () {
        if (this.bootstrapValue === "N") {
            var done = this.async();
            this.prompt({
                type: 'input',
                name: 'name',
                message: 'Would you like to use Foundation? (Y/N)',
                store: true,
                default: "N"  // Default
            }, function (answers) {
                this.log(answers.name);
                this.foundationValue = answers.name;
                done();
            }.bind(this));
        }
    },


    /**
     * Function askForFontAwesome. This function asks to user if he would like to use Font Awesome.
     * We store his answers in the variable fontAwesomeValue.
     */
    askForFontAwesome: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Would you like to use Font Awesome (Y/N)',
            store: true,
            default: "N"  // Default
        }, function (answers) {
            this.log(answers.name);
            this.fontAwesomeValue = answers.name;
            done();
        }.bind(this));
    },

    /**
     * Function writing. This function copies the templates according to user choices and build the version of the application.
     */
    writing: function () {
        this.log('SASS ' + this.sassValue + ' Bootstrap: ' + this.bootstrapValue + ' Foundation: ' + this.foundationValue);

        this.basicTemplate = 'app/components/' + lodash.kebabCase(this.projectTitle);

        this.copy('_package.json', 'package.json');
        this.copy('_readme.md', 'readme.md');
        this.copy('_gitignore', '.gitignore');
        this.copy('_tsconfig.json', 'tsconfig.json');
        this.copy('_typings.json', 'typings.json');
        this.copy('_gulpfile.ts', 'gulpfile.ts');

        this.copy('app/_main.ts', 'app/main.ts');
        this.copy('app/_routeur.ts', 'app/component.ts');
        this.copy('app/_index.html', 'app/index.html');

        this.copy('app/assets/_README.md', 'app/assets/_README.md');

        this.copy('app/components/_README.md', 'app/components/_README.md');

        this.copy('app/shared/_README.md', 'app/shared/_README.md');

        this.copy('app/shared/directives/_README.md', 'app/shared/directives/_README.md');
        this.copy('app/shared/directives/src/_README.md', 'app/shared/directives/src/_README.md');
        this.copy('app/shared/directives/test/_README.md', 'app/shared/directives/test/_README.md');

        this.copy('app/shared/services/_README.md', 'app/shared/services/_README.md');
        this.copy('app/shared/services/src/_README.md', 'app/shared/services/src/_README.md');
        this.copy('app/shared/services/test/_README.md', 'app/shared/services/test/_README.md');

        this.copy('app/shared/styles/_README.md', 'app/shared/styles/_README.md');
    },

    /**
     * Function install. This function installs all dependencies according to user choices.
     */
    install: function () {
        if (this.sassValue === "Y") {

        }
        if (this.bootstrapValue === "Y") {

        }
        else if (this.foundationValue === "N") {

        }
        this.npmInstall();
        //this.spawnCommand('dir');
    }
});