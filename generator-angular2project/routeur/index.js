var generators = require('yeoman-generator');
var lodash = require('lodash');

module.exports = generators.Base.extend({

    constructor:function(){
        generators.Base.apply(this, arguments);
        this.arguments = lodash.camelCase(this.arguments);
        this.log(this.arguments);
    },
    /*
    prompting: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, function (answers) {
            this.log(answers.name);
            this.log(generators.arguments);
            done();
        }.bind(this));
    },*/

    writing: function () {
       this.basicTemplate = 'app/components/' + lodash.kebabCase(this.arguments);

        this.copy('components/_basic-template.html', this.arguments+'/'+this.basicTemplate + '.html');
        this.copy('components/_basic-template.ts', this.arguments+'/'+this.basicTemplate + '.ts');
    },

});