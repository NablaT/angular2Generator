/**
 * Test Component App
 */
import {App} from "./app.component";
import {Component} from "angular2/core";
@Component({
    selector: 'test-cmp',
    template: '<sd-app></sd-app>',
    directives: [App]
})
class TestApp{}
