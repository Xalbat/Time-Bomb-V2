import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public url: string = "http://176.143.99.66:8080/api";
  public httpOptions: object = null;

  constructor() {
    // let myHeaders: HttpHeaders = new HttpHeaders();
    // myHeaders = myHeaders.append('Authorization', 'Basic ' + btoa('jordan:ajc'));
    // this.httpOptions = { headers: myHeaders };
   }
}