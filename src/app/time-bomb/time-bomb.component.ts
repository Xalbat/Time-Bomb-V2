import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { UserService } from '../user.service';
import { Card } from '../card';

@Component({
  selector: 'app-time-bomb',
  templateUrl: './time-bomb.component.html',
  styleUrls: ['./time-bomb.component.css']
})
export class TimeBombComponent implements OnInit {

  detonateurRestant
  dataUser;
  current : number;
  dataPartie: Array<any>;

  constructor(public srvMatch: MatchService, public srvUser: UserService) { }

  ngOnInit(): void {
      this.dataUser=this.srvMatch.currentMatch.players.find(user =>
          user.id==this.srvUser.user.id);
  }

  public refresh() {
    this.srvMatch.maPartie();
    this.data();
  }

  public data() {
    if (this.srvMatch.currentMatch!=null) {}
    else
    {
      let i=0;
      for (let card of this.srvMatch.currentMatch.deck)
      {
        if (card.reveal && card.type=='DEFFUSE')
        {
          i=i+1;
        }
      }
    }

  }

  public maPartie() {
    this.srvMatch.maPartie();
  }
      
}
