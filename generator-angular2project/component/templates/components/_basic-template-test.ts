/**
 * Created by rpourtier on 10/03/2016.
 */
import {<%= nameOfComponent %>} from "./<%= argsInKebab %>.component";
import {Component} from "angular2/core";
@Component({
    selector: 'test-cmp',
    template: '<sd-<%= argsInKebab %>></sd-<%= argsInKebab %>>',
    directives: [<%= nameOfComponent %>]
})
class Test<%= nameOfComponent %> {}