var generators = require('yeoman-generator');
var lodash = require('lodash');
var CommonFunctions = require('../common-functions.js')

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfComponent= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
        this.log(this.nameOfComponent);
        this.log(this.arguments);
        CommonFunctions.readJson();
    },

    writing: function () {
        this.argsInKebab = lodash.kebabCase(this.arguments);
        this.basicTemplate = 'app/components/' + this.argsInKebab + '/' + this.argsInKebab;
        this.copy('components/_basic-template.html', this.basicTemplate + '.component.html');
        this.copy('components/_basic-template.ts', this.basicTemplate + '.component.ts');
        this.copy('components/_basic-template.css', this.basicTemplate + '.component.css');
        this.copy('components/_basic-template-test.ts', this.basicTemplate + '.component.spec.ts');
    },

});