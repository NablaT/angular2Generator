var generators = require('yeoman-generator');
var lodash = require('lodash');

module.exports = generators.Base.extend({

    prompting: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            store:true,
            default: false
        }, function (answers) {
            this.log(answers.name);
            this.projectTitle=answers.name;
            done();
        }.bind(this));
    },

    askForSass: function(){
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Would you like to use SASS? (Y/N)',
            store:true,
            default: "" // Default
        }, function (answers) {
            this.log(answers.name);
            this.sassValue=answers.name;
            done();
        }.bind(this));
    },

    askForBootstrap: function(){
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Would you like to use Bootstrap? (Y/N)',
            store:true,
            default: ""  // Default
        }, function (answers) {
            this.log(answers.name);
            this.bootstrapValue=answers.name;
            done();
        }.bind(this));
    },

    askForFoundation: function(){
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Would you like to use Foundation? (Y/N)',
            store:true,
            default: ""  // Default
        }, function (answers) {
            this.log(answers.name);
            this.foundationValue=answers.name;
            done();
        }.bind(this));
    },

    writing: function () {
        this.log('SASS '+ this.sassValue +' Bootstrap: '+ this.bootstrapValue+' Foundation: '+this.foundationValue );

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

        //this.copy('app/components/_about.ts', 'app/components/about.ts');
        //this.copy('app/components/_home.ts', 'app/components/home.ts');

        //this.copy('app/shared/_test.ts', 'app/shared/test.ts');
        this.copy('app/components/_README.md', 'app/components/_README.md');

        this.copy('app/shared/_README.md', 'app/shared/_README.md');

        this.copy('app/shared/directives/_README.md', 'app/shared/directives/_README.md');
        this.copy('app/shared/directives/src/_README.md', 'app/shared/directives/src/_README.md');
        this.copy('app/shared/directives/test/_README.md', 'app/shared/directives/test/_README.md');

        this.copy('app/shared/services/_README.md', 'app/shared/services/_README.md');
        this.copy('app/shared/services/src/_README.md', 'app/shared/services/src/_README.md');
        this.copy('app/shared/services/test/_README.md', 'app/shared/services/test/_README.md');


        this.copy('app/shared/styles/_README.md', 'app/shared/styles/_README.md');
        //this.copy('app/components/_basic-template.html', this.basicTemplate + '.html');
        //this.copy('app/components/_basic-template.ts', this.basicTemplate + '.ts');
    },

    install: function(){
        this.npmInstall();
        //this.spawnCommand('dir');
    }
});