import { Directive,  Renderer, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[doUnderline]'
})
export class UnderlineDirective{
    @Input() doUnderline : string;

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ){}
      
    @HostListener('mouseenter') onMouseEnter() {
        this.hover(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(false);
    }   
    
    hover(underline: boolean){
        if(underline){
            this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
        } else {
            this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
}