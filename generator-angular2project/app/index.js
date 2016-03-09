var generators = require('yeoman-generator');

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
            done();
        }.bind(this));

    },

    writing: function () {
        //this.basicTemplate = 'app/' + lodash.kebabCase(this.appname);

        this.copy('_package.json', 'package.json');
        this.copy('_readme.md', '_readme.md');
        this.copy('_gitignore', '.gitignore');

        this.copy('app/_main.ts', 'app/_main.ts');
        this.copy('app/_routeur.ts', 'app/_routeur.ts');

        this.copy('app/_index.html', 'app/_index.html');
        this.copy('app/_assets', 'app/assets');
        this.copy('app/_components', 'app/components');
        this.copy('app/_shared', 'app/shared');
        //this.copy('app/_basic-template.html', this.basicTemplate + '.html');
        //this.copy('app/_basic-template.js', this.basicTemplate + '.js');
    }


});