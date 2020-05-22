import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {

  constructor(public srvMatch:MatchService) { }

  ngOnInit(): void {
    this.listeMatchterminees();
  }

  public listeMatchterminees() {
    this.srvMatch.getListePartiesTerminees();
}

}