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

        this.copy('app/_main.ts', 'app/main.ts');
        this.copy('app/routeur.ts', 'app/routeur.ts');

        this.copy('app/_index.html', 'app/index.html');
        //this.copy('app/_basic-template.html', this.basicTemplate + '.html');
        //this.copy('app/_basic-template.js', this.basicTemplate + '.js');
    }


});
});