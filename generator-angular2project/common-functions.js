var json = require('fs');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({



    /**
     *
     */
    readJson: function () {
        json.readFile("./package.json", function (err, obj) {
            // obj contains JSON data
            this.log(obj);
        });
    }

});