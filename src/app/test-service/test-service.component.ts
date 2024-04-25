import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'test-service',
  templateUrl: './test-service.component.html',
  styleUrl: './test-service.component.css'
})
export class TestServiceComponent {
  selectedTab: string = 'home';

  //1. HOW TO PROVIDE DEPENDENCY
  constructor(private subService: SubscribeService) {

  }

  //When HOME Link is clicked
  HomeClicked() {
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked() {
    this.selectedTab = 'admin';
  }

  OnSubscribe() {
    this.subService.OnSubscribeClicked('monthly');
  }
}
