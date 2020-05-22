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
    setInterval( () => this.maPartie(), 2000);
    this.refresh();
  }

  public quitter() {
    this.srvMatch.quitter();
  }

  public refresh() {
    this.srvMatch.getListePartiesEnAttenteEnCours();
  }

  public creer() {
    this.srvMatch.creerPartie(this.match);
    this.match=new Match();
    setTimeout(() => this.refresh(),500)
  }

  public rejoindre(match) {
    this.srvMatch.rejoindre(match);
    this.maPartie();
    setTimeout(() => this.refresh(),500);
  }

  public maPartie() {
    this.srvMatch.maPartie();
  }

  public demarrer(match) {
    this.srvMatch.demarrerPartie(match)
    this.jouerPartie();
  }

  public supprimer(match) {
    this.srvMatch.delete(match);
    setTimeout(() => this.refresh(),500)
  }

  public jouerPartie() {
    //redirect à Time-Bomb
  }

  public regarder(match: Match) {
    this.rejoindre(match);
    this.jouerPartie();
  }
}
