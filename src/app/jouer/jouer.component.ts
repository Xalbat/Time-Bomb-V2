import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {

  interval: any;
  match=new Match;

  constructor(public srvMatch : MatchService, public srvUser : UserService) { }

  ngOnInit(): void {
   this.srvMatch.getListePartiesEnAttenteEnCours();
  }

  public listeMatchEnCours() {
    this.srvMatch.getListePartiesEnAttenteEnCours();
  }

  public creer() {
    alert(this.match)
    this.srvMatch.creerPartie(this.match);
    this.match=new Match();
    this.srvMatch.getListePartiesEnAttenteEnCours();
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
    this.match=new Match();
  }

  public jouerPartie() {
    //redirect à Time-Bomb
  }

  public regarder(match: Match) {
    this.rejoindre(match);
    this.jouerPartie();
  }
}
