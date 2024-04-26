import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Models/User';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logger: LoggerService) { }

  users: User[] = [
    new User('Steve Smith', 'Male', 'Monthly', 'Active'),
    new User('Mery Jane', 'Female', 'Yearly', 'Inactive'),
    new User('Mark Tyler', 'Male', 'Quaterly', 'Active')
  ];

  OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();
  
  GetAllUsers(){
    return this.users;
  }

  CreateUser(name: string, gender: string, subType: string, status: string){
    let user = new User(name, gender, subType, status);
    this.users.push(user);
    this.logger.LogMessage(name, status);
  }

  OnShowUserDetails(user: User){
    this.OnUserDetailsClicked.emit(user);
  }

}
