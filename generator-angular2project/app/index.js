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
            message: 'Would you like to use Font Awesome? (Y/N)',
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

        this.copy('app/assets/_README.md', 'app/assets/README.md');

        this.copy('app/components/_README.md', 'app/components/README.md');

        this.copy('app/shared/_README.md', 'app/shared/_README.md');

        this.copy('app/shared/directives/_README.md', 'app/shared/directives/README.md');
        this.copy('app/shared/directives/src/_README.md', 'app/shared/directives/src/README.md');
        this.copy('app/shared/directives/test/_README.md', 'app/shared/directives/test/README.md');

        this.copy('app/shared/services/_README.md', 'app/shared/services/README.md');
        this.copy('app/shared/services/src/_README.md', 'app/shared/services/src/README.md');
        this.copy('app/shared/services/test/_README.md', 'app/shared/services/test/README.md');

        this.copy('app/shared/styles/_README.md', 'app/shared/styles/README.md');
    },

    /**
     * Function installSass. This function checks if user want to install Sass, if yes it runs the installation.
     */
    installSass: function(){
        if (this.sassValue=== "Y") {
            this.npmInstall(['gulp-sass'], { 'save': true }); //npm install gulp-sass --save
        }
    },

    /**
     * Function installBootstrapOrFoundation. This function checks if user want to install Bootstrap or Foundation.
     * If one of those framework has been chosen, the function install it.
     */
    installBootstrapOrFoundation: function(){
        if (this.bootstrapValue === "Y") {
            this.npmInstall(['bootstrap@4.0.0-alpha.2'], { 'save': true }); //npm install bootstrap@4.0.0-alpha.2 --save
        }
        else if (this.foundationValue === "Y") {
            this.npmInstall(['foundation-sites'], { 'save': true }); //npm install foundation-sites --save
        }
    },

    /**
     * Function installFontAwesome. This function checks if user want to install FontAwesome, if yes it runs the installation.
     */
    installFontAwesome: function(){
        if (this.fontAwesomeValue === "Y") {
            this.npmInstall(['font-awesome'], { 'save': true }); //npm install font-awesome --save
        }
    },

    /**
     * Function install. This function installs all dependencies according to user choices.
     */
    install: function () {
        this.log("Sass value: "+ this.sassValue);
        this.npmInstall(); //npm install
    }
});