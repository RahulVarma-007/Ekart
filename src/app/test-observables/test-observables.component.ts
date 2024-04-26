import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'test-observables',
  templateUrl: './test-observables.component.html',
  styleUrl: './test-observables.component.css'
})
export class TestObservablesComponent {

  title = 'angular-observables';

  data: any[] = [];

  // Creating Observable

  // Observable
  myObservable = new Observable( (observer) => {
    // observer.next([1,2,3,4,5]);
    // observer.next(1);
    // observer.next(2);
    // observer.next(3);
    // observer.next(4);
    // observer.next(5);

    setTimeout(() => { observer.next(1)}, 1000);
    setTimeout(() => { observer.next(2)}, 2000);
    setTimeout(() => { observer.next(3)}, 3000);
    // setTimeout(() => { observer.error(new Error('Something went wrong. Please try agian later.'))}, 5000);
    setTimeout(() => { observer.next(4)}, 4000);
    setTimeout(() => { observer.next(5)}, 5000);
    setTimeout(() => { observer.complete()}, 6000);

  });

  GetAsyncData(){

    // Observer
    // next, error, complete
    // this.myObservable.subscribe((val: any) => {
    //   // this.data = val;
    //   this.data.push(val);
    // },
    // (err) => {
    //   alert(err.message);
    // },
    // () => {
    //   alert('All the data is streamed');
    // });

    this.myObservable.subscribe(
      {
        next: (val: any) => {
          this.data.push(val);
        },
        error(err){
          alert(err.message);
        },
        complete(){
          alert('All the data is streamed');
        }
      }
    );
  }
}

