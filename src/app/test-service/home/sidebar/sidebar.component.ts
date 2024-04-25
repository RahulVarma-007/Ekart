import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  //1. HOW TO PROVIDE DEPENDENCY
  constructor(private subService: SubscribeService) {

  }

  OnSubscribeClicked() {
    this.subService.OnSubscribeClicked('quaterly');
  }
}
