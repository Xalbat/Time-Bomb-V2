import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';
import { User } from '../user';
import { TimeInterval } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {

  interval: any;
  match=new Match;

  constructor(private srvMatch : MatchService, private srvUser : UserService) { }

  ngOnInit(): void {
    this.interval = setInterval(this.srvMatch.getListePartiesEnAttenteEnCours,1000)
  }

  public listeMatchEnCours() {
    return this.srvMatch.getListePartiesEnAttenteEnCours;
  }

  public creer() {
    this.srvMatch.creerPartie(this.match);
  }

  public rejoindre(match) {
    this.srvMatch.rejoindre(match.id, this.srvUser.user);
  }

  public demarrer(match) {
    this.srvMatch.demarrerPartie(match)
    this.jouerPartie();
  }

  public supprimer(match) {
    this.srvMatch.delete(match);
  }

  public clearInterval() {
    clearInterval(this.interval)
  }

  public jouerPartie() {
    //redirect à Time-Bomb
  }

  public regarder(match: Match) {
    this.rejoindre(match);
    this.jouerPartie();
  }
}
