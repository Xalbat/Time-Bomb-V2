import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchesService } from '../matches.service';


@Component({
  selector: 'app-creer-partie',
  templateUrl: './creer-partie.component.html',
  styleUrls: ['./creer-partie.component.css']
})
export class CreerPartieComponent implements OnInit {

  //size = ;
  
  //match = new Match(id, name, size);

  constructor(private srvMatch: MatchesService) { }

  ngOnInit() { }

  public creerMatch(){
  //this.srvMatch.creerPartie(this.match);
  //this.match = new Match()
}




}
