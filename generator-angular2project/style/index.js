var generators = require('yeoman-generator');
var lodash = require('lodash');
var json = require('fs');

module.exports = generators.Base.extend({

    /**
     * Generator constructor. It reworks the arguments.
     */
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfStyle= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
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

        this.basicTemplateSrc = 'app/shared/styles/' + this.argsInKebab;

        this.copy('styles/_basic-template.css', this.basicTemplateSrc + '.css');
        this.copy('styles/_basic-template.scss', this.basicTemplateSrc + '.scss');
    },

});