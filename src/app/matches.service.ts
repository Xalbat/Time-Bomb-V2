import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { Match } from './match';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private apiUrl: string = "";
  public matches : Array<Match> = null;

  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.apiUrl = `${this.appConfig.url}/matches`;
  }

 
  public getListePartiesEnAttenteEnCours() {
    this.http.get<Array<User>>(this.apiUrl)
        .subscribe()
  }

  public getListePartiesTerminées() {
    this.http.get<Array<User>>(this.apiUrl + "/terminated")
        .subscribe()
  }
  
  public creerPartie(match: Match) {
    this.http.post<Match>(this.apiUrl, match)
        .subscribe()
  }

  public partieDetaille(id: number) {
    this.http.get<Match>(this.apiUrl + "/" + id)
        .subscribe()
  }

  public delete(match: Match) {
    this.http.delete(this.apiUrl+ "/" + match.id)
  }

  public rejoindre(id: number, user: User) {
    this.http.put(this.apiUrl + "/" + id, user)
  }

  public jouer(match:Match, id) {
    this.http.put(this.apiUrl + "/" + match.id +"/play" , id )
  }

}
