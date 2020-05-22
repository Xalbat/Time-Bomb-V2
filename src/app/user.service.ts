import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    .subscribe();
  }

  public connection(user: User) {
    this.http.post<User>(this.appConfig.url + "/users/login", user)
        .subscribe(user => {
          this.user=user;
          this.appConfig.setUser(user)
        })
  }

  public deconnexion() {
    this.user=null;
  }



}
