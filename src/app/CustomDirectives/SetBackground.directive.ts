import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackground{

    // private element: ElementRef;

    constructor(private element: ElementRef, private renderer: Renderer2){
        // element.nativeElement.style.backgroundColor = '#36454F';
        // element.nativeElement.style.color = 'white';

        // this.element = element;
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white';
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title');
    }
    
}