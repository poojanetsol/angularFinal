import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[appStyle]' })
export class StyleDirective {
    constructor(elem: ElementRef, renderer: Renderer2) {
       renderer.setStyle(elem.nativeElement, 'border', '1px solid red');
       renderer.setStyle(elem.nativeElement, 'color', 'red');
    }
}