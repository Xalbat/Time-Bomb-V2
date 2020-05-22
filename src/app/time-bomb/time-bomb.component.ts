import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { timer } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-time-bomb',
  templateUrl: './time-bomb.component.html',
  styleUrls: ['./time-bomb.component.css']
})
export class TimeBombComponent implements OnInit {

  user: User;
  current : number;

  constructor(public srvMatch: MatchService, public srvUser: UserService) { }

  ngOnInit(): void {
      this.srvMatch.maPartie();
      this.user=this.srvMatch.currentMatch.players.find(user =>
          user.id==this.srvUser.user.id);
      alert(this.user.currentRole)
  }

  public maPartie() {
    this.srvMatch.maPartie();
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
    
  }

  
}
