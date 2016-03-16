var json = require('fs');

/**
 *
 */
function readJson(){
    json.readFile("./package.json", function(err, obj) {
        // obj contains JSON data
        this.log(obj);
    });
}