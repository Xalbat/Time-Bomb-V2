import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Match } from './match';
import { AppConfigService } from './app-config.service';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private apiUrl: string;
  public currentMatch = null;
  public match = new Match();
  public matchesEnCours : Array<Match>;
  public matchesTermines : Array<Match>;
  
  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.apiUrl = `${this.appConfig.url}/matches`;
  }

  public getListePartiesEnAttenteEnCours() {
    this.http.get<Array<Match>>(this.apiUrl, this.appConfig.httpOptions)
        .subscribe(matches => this.matchesEnCours = matches)
  }

  public getListePartiesTerminees() {
    this.http.get<Array<Match>>(this.apiUrl + "/terminated", this.appConfig.httpOptions)
        .subscribe(matches => this.matchesTermines = matches)
  }
  
  public creerPartie(match: Match) {
    this.http.post<Match>(this.apiUrl, match, this.appConfig.httpOptions)
        .subscribe()
  }

  public demarrerPartie(match: Match) {
    this.http.post<Match>(this.apiUrl + "/" + match.id + "/start", match, this.appConfig.httpOptions)
    .subscribe()
  }

  public partieDetaille(match) {
    this.http.get<Match>(this.apiUrl + "/" + match.id, this.appConfig.httpOptions)
        .subscribe(match => this.match = match)
  }

  public delete(match: Match) {
    this.http.delete(this.apiUrl+ "/" + match.id, this.appConfig.httpOptions)
  }

  public rejoindre(match, user: User) {
    this.http.put(this.apiUrl + "/" + match.id, user, this.appConfig.httpOptions)
  }

  public jouer(match:Match, card:Card) {
    this.http.put(this.apiUrl + "/" + match.id +"/play" , card, this.appConfig.httpOptions )
  }

}