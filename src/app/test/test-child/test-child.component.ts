import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestChild2Component } from '../test-child2/test-child2.component';

@Component({
  selector: 'test-child',
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.css'
})
export class TestChildComponent {

  contentChildOutput: any='';
  //accesing ng content para
  @ContentChild('para') paraEl : ElementRef;

  showContentChild(){
    this.contentChildOutput = '{'+ this.paraEl.nativeElement.innerHTML + '} is present in ContentChild';
  }

  @ContentChild(TestChild2Component) testChild2Ele: TestChild2Component;

  showChild2(){
    this.contentChildOutput = '{'+ this.testChild2Ele.name + '} is name property of Test Child 2';
  }

  @ContentChildren('para') paraEls: QueryList<ElementRef>;

  showParaChildren(){
    this.contentChildOutput = '';
    this.paraEls.forEach(
      (ele) => {
        this.contentChildOutput = this.contentChildOutput + ele.nativeElement.innerHTML+ '/ ';
      }
    )
  }

  @ContentChildren(TestChild2Component) componentEls: QueryList<TestChild2Component>;

  showComponentChildren(){
    this.contentChildOutput =  "check Console";
    this.componentEls.forEach(
      (ele) => {
        console.log(ele);
      }
    )
  }

}
