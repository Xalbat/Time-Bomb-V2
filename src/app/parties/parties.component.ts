import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {

  constructor(private srvMatch:MatchService) { }

  ngOnInit(): void {
  }

  public listeMatchterminees() {
    return this.srvMatch.getListePartiesTerminees;
}

}