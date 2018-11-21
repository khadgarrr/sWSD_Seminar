import {Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective{
    @Input() highlight : string;

    constructor(el: ElementRef){
        el.nativeElement.style.color = '#0072C6';
        el.nativeElement.style.fontSize = '20px';
    }
}