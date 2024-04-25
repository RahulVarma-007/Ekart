import { Component } from '@angular/core';
import { User } from '../../../Models/User';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  // providers: [UserService]
})
export class UserListComponent {
  constructor(private userService: UserService){

  }
  userList = this.userService.GetAllUsers();

  // ShowUserDetails(user: User){
  //   this.userService.OnShowUserDetails(user);
  // }
}
