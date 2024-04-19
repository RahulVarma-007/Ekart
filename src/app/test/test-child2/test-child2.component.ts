import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-child2',
  templateUrl: './test-child2.component.html',
  styleUrl: './test-child2.component.css'
})
export class TestChild2Component {

  @Input() name: string = 'Test Child 2';
}
