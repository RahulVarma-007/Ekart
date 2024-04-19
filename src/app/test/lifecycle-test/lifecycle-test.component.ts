import { Component, ContentChild, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'lifecycle-test',
  templateUrl: './lifecycle-test.component.html',
  styleUrl: './lifecycle-test.component.css'
})
export class LifecycleTestComponent {

  @Input() message: string;
  @ViewChild('para') paraEl: ElementRef;

  constructor(){
    console.log("constructor called");
    // console.log('message:',this.message)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges Hook called");
    // console.log('message:',this.message)
    // console.log(changes);
  }

  ngOnInit(){
    console.log("ngOnInit Hook called");
    // This below code is not possible because paraEl is not yet available
    // console.log(this.paraEl.nativeElement.innerHTML);
  }

  ngDoCheck(){
    console.log("ngDoCheck Hook called");
    // console.log(this.paraContent)
  }

  @ContentChild('temppara') paraContent: ElementRef;

  ngAfterContentInit(){
    console.log("ngAfterContentInit Hook called");
    // console.log(this.paraContent)
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Hook called");
    // console.log("In ngAfterContentChecked:",this.paraEl);
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit Hook called");
    // console.log("In ngAfterViewInit:",this.paraEl);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Hook called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Hook called");
  }


}
