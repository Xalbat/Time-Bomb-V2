import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {

  interval: any;
  match=new Match;

  constructor(public srvMatch : MatchService, public srvUser : UserService, private router: Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  public quitter() {
    this.srvMatch.quitter();
  }

  public refresh() {
    this.srvMatch.getListePartiesEnAttenteEnCours();
    this.maPartie();
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

  public demarrer() {
    this.srvMatch.demarrerPartie()
    this.jouerPartie();
  }

  public supprimer(match) {
    this.srvMatch.delete(match);
    setTimeout(() => this.refresh(),500)
  }

  public jouerPartie() {
    this.router.navigate (['/time-bomb']);
  }

  public regarder(match: Match) {
    this.rejoindre(match);
    this.jouerPartie();
  }
}
