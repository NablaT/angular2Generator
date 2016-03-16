var generators = require('yeoman-generator');
var lodash = require('lodash');
var CommonFunctions = require('../common-functions.js');
var json = require('fs');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
        this.reworkArguments = lodash.camelCase(this.arguments);
        this.nameOfComponent= this.reworkArguments.charAt(0).toUpperCase() + this.reworkArguments.slice(1);
        this.log(this.nameOfComponent);
        this.log(this.arguments);
        //CommonFunctions.readJson();
    },


    /**
     * Function readJson. This function reads the file package.json to know if user asked to install sass.
     */
    readJson: function () {
        this.log("in readJson");
        this.hasSass=false;
        this.hasBootstrap=false;
        this.hasFoundation=false;
        this.hasFontAwesome=false;
        var jsonContent=json.readFileSync("./package.json", 'utf8');
        var storeJson= JSON.parse(jsonContent);
        this.log(storeJson);
        for(var currentKey in storeJson.dependencies) {
            if(currentKey=="gulp-sass"){
                this.hasSass=true;
            }
            if(currentKey==="bootstrap"){
                this.hasBootstrap=true;
            }
            else if(currentKey=="foundation"){
                this.hasFoundation=true;
            }
            if(currentKey=="font-awesome"){
                this.hasFontAwesome=true;
            }
            this.log("key:"+currentKey+", value:"+storeJson.dependencies[currentKey]);
        }

        this.log("bootstrap: "+this.hasBootstrap+" foundation: "+this.hasFoundation+" sass: "+this.hasSass+" fontawesome: "+this.hasFontAwesome);

    },
    

    /**
     * Function writing. This function copies the basic templates for components.
     */
    writing: function () {
        this.argsInKebab = lodash.kebabCase(this.arguments);
        this.basicTemplate = 'app/components/' + this.argsInKebab + '/' + this.argsInKebab;
        this.copy('components/_basic-template.html', this.basicTemplate + '.component.html');
        this.copy('components/_basic-template.ts', this.basicTemplate + '.component.ts');
        this.copy('components/_basic-template.css', this.basicTemplate + '.component.css');
        this.copy('components/_basic-template-test.ts', this.basicTemplate + '.component.spec.ts');
    },

});