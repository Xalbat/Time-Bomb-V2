import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AppConfigService } from './app-config.service';
import { User } from './user';
import { AppConfigService } from './app-config.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = null;

  constructor(private appConfig: AppConfigService, private http: HttpClient, private router: Router) { }

  public inscription(user: User) {
    this.http.post<User>(this.appConfig.url + "/users/subscribe", user)
        .subscribe(user => this.router.navigate (['/home']))
  }

  public connection(user: User) {
    this.http.put<User>(this.appConfig.url + "/users/login", user)
        .subscribe(user => {
          this.user=user;
          this.appConfig.setUser(user)
        })
  
  }

  public deconnexion(user: User) {
    this.http.put<User>(this.appConfig.url + "/home", user)
        .subscribe()

  }



}
