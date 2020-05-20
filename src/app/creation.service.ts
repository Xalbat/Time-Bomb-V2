import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Partie } from './partie';

@Injectable({
  providedIn: 'root'
})
export class CreationService {

  private apiUrl: string ="";
  public parties : Array<Partie> = null;
  
  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.apiUrl = `${ this.appConfig.url }/creer-partie`;
  }


  public reload() {
    this.http.get<Array<Partie>>(this.apiUrl)
        .subscribe(parties => this.parties = parties);
  }

  public add(partie) {
    this.http.post<Partie>(this.apiUrl, partie)
        .subscribe(respPartie => this.parties.push(respPartie));
  }





}
