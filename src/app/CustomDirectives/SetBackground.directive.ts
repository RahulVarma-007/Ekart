import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackground{

    // private element: ElementRef;
    
    //Custom Property Binding
    // @Input('setBackground') backColor: string = '#36454F';
    // @Input() textColor: string = 'White';
    // @Input() title: string = 'Example Title from Directive';

    @Input('setBackground') changeTextAndBackColor: {backColor: string, textColor: string};

    constructor(private element: ElementRef, private renderer: Renderer2){
        // element.nativeElement.style.backgroundColor = '#36454F';
        // element.nativeElement.style.color = 'white';

        // this.element = element;
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white';

        // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
        // this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title');

        //Custom Property Binding
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor);


    }
    
}