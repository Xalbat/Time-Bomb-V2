import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { NgIf } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-time-bomb',
  templateUrl: './time-bomb.component.html',
  styleUrls: ['./time-bomb.component.css']
})
export class TimeBombComponent implements OnInit {

  user = null;
  current : number;

  constructor(public srvMatch: MatchService) { }

  ngOnInit() {
  }
  

  public joueurCurrent() {
    this.current = Math.floor(Math.random() * (this.srvMatch.match.size  + 1))
    return this.current;
    }

    

  public choisirCarte(card) {
    card.reveal = true;
    this.current = card.owner;
  
  }

  public jouer(user, card, current) {
   
    if (this.user == this.current){
      this.choisirCarte(card);
    }
    else {
      timer(1000);
      this.jouer(user, card, current)

    }
    //if  c'est pas à toi de jouer
    //sinon requete
  }

  
}
