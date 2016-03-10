/**
 * Created by rpourtier on 10/03/2016.
 */
import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[<%=reworkArguments%>]'
})
export class <%= nameOfDirective %>Directive {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}