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

  //life cycle hooks
  inputValue:string;
  // inputValue:string[] = ['Hello','Hi There'];

  onSubmit(input: HTMLInputElement){
    this.inputValue = input.value;
    // this.inputValue.push(input.value);
  }

  //ngOnDestroy
  toDestroy: boolean = false;

  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }
}
