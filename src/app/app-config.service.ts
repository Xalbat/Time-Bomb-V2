import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  public url: string = "http://176.143.99.66:8080/api";
  public httpOptions: object = null;
  UserService: any;
  currentUser: User;

  constructor() {}

   public setUser(login, password) {

    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic ' + btoa(login + ':' + password));
    this.httpOptions = { headers: myHeaders };
   }

}