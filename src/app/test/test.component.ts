import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  
  @ViewChildren('inputEl')
  inputElements: QueryList<ElementRef>;

  showChildren(){
    this.inputElements.forEach( ele => console.log(ele.nativeElement));
  }

  toggle: boolean = true;

  onToggle(){
    this.toggle = !this.toggle;
  }
}
