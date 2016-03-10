var generators = require('yeoman-generator');
var lodash = require('lodash');

module.exports = generators.Base.extend({

    prompting: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, function (answers) {
            this.log(answers.name);
            this.projectTitle=answers.name;
            done();
        }.bind(this));

    },

    writing: function () {
        this.basicTemplate = 'app/components/' + lodash.kebabCase(this.projectTitle);

        this.copy('_package.json', 'package.json');
        this.copy('_readme.md', '_readme.md');
        this.copy('_gitignore', '.gitignore');

        this.copy('app/_main.ts', 'app/_main.ts');
        this.copy('app/_routeur.ts', 'app/_routeur.ts');
        this.copy('app/_index.html', 'app/_index.html');

        this.copy('app/assets/_test', 'app/assets/test');

        this.copy('app/components/_about.ts', 'app/components/about.ts');
        this.copy('app/components/_home.ts', 'app/components/home.ts');

        this.copy('app/shared/_test.ts', 'app/shared/test.ts');
        this.copy('app/components/_basic-template.html', this.basicTemplate + '.html');
        this.copy('app/components/_basic-template.ts', this.basicTemplate + '.ts');
    }


});