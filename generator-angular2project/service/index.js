/**
 * Created by rpourtier on 10/03/2016.
 */
var generators = require('yeoman-generator');
var lodash = require('lodash');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfService= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
        this.log(this.nameOfService);
        this.log(this.arguments);
    },

    writing: function () {
        this.argsInKebab = lodash.kebabCase(this.arguments);
        this.basicTemplate = 'app/shared/services/' + this.argsInKebab + '/' + this.argsInKebab;
        //this.copy('services/_basic-template.html', this.basicTemplate + '.component.html');
        this.copy('services/_basic-template.ts', this.basicTemplate + '.component.ts');
        //this.copy('services/_basic-template.css', this.basicTemplate + '.component.css');
        this.copy('services/_basic-template-test.ts', this.basicTemplate + '.component.spec.ts');
    },

});