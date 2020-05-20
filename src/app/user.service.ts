import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private appConfig: AppConfigService, private http: HttpClient) { }

  public inscription(user: User) {
    this.http.post<User>("http://176.143.99.66:8080/api/users/subscribe", user)
        .subscribe()
  }

  public connection(user: User) {
    this.http.put<User>("http://176.143.99.66:8080/api/users/login", user)
    .subscribe()
  }

}



