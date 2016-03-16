var generators = require('yeoman-generator');
var lodash = require('lodash');
var json = require('fs');

/**
 * Component generator. While user run the command "yo angular2project:component NameOfTheComponent",
 * every function in the generator will be ran.
 * @type {void|*}
 */
module.exports = generators.Base.extend({

    /**
     * Generator constructor. It reworks the arguments.
     */
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfComponent= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
    },

    /**
     * Function checkSass. This function reads the file package.json to know if user asked to install sass.
     */
    checkSass: function () {
        this.hasSass=false;
        var jsonContent=json.readFileSync("./package.json", 'utf8');
        var storeJson= JSON.parse(jsonContent);
        for(var currentKey in storeJson.dependencies) {
            if(currentKey=="gulp-sass"){
                this.hasSass=true;
            }
        }
    },

    /**
     * Function writing. This function copies the basic templates for components.
     */
    writing: function () {
        this.argsInKebab = lodash.kebabCase(this.arguments);
        this.basicTemplate = 'app/components/' + this.argsInKebab + '/' + this.argsInKebab;
        this.copy('components/_basic-template.html', this.basicTemplate + '.component.html');
        this.copy('components/_basic-template.ts', this.basicTemplate + '.component.ts');
        if(this.hasSass){
            this.copy('components/_basic-template.css', this.basicTemplate + '.component.scss');
        }
        else{
            this.copy('components/_basic-template.css', this.basicTemplate + '.component.css');
        }
        this.copy('components/_basic-template-test.ts', this.basicTemplate + '.component.spec.ts');
    },

});