import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit(){

  }

  @HostListener('mouseenter')
  OnMouseEnter(){
    this.renderer.addClass(this.element.nativeElement, 'highlight-product');
  }

  @HostListener('mouseleave')
  OnMouseLeave(){
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product');
  }


}
