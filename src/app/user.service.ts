import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AppConfigService } from './app-config.service';
import { User } from './user';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = null;

  constructor(private appConfig: AppConfigService, private http: HttpClient) { }

  public inscription(user: User) {
    this.http.post<User>(this.appConfig.url + "/users/subscribe", user)
        .subscribe()
  }

  public connection(user: User) {
    this.http.put<User>(this.appConfig.url + "/users/login", user)
        .subscribe()

  }

  public deconnexion(user: User) {
    this.http.put<User>(this.appConfig.url + "/home", user)
        .subscribe()

  }



}
