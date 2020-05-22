import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-time-bomb',
  templateUrl: './time-bomb.component.html',
  styleUrls: ['./time-bomb.component.css']
})
export class TimeBombComponent implements OnInit {

  constructor(public srvMatch: MatchService) { }

  ngOnInit(): void {
  }

  public jouer(user, card) {
    //if c'est toi le joueur => on coupe pas une de ses carte
    //if  c'est pas à toi de jouer
    //sinon requete
  }

}
