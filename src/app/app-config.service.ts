import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  public url: string = "http://176.143.99.66:8080/api";
  public httpOptions: object = null;
  userService: any;

  constructor() 
  {
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Basic ' + btoa(this.userService.user.username+':'+this.userService.user.username));
    this.httpOptions = { headers: myHeaders };
   }

}