import { Component, OnInit } from '@angular/core';
import { CreationService } from '../creation.service';
import { Partie } from '../partie';


@Component({
  selector: 'app-creer-partie',
  templateUrl: './creer-partie.component.html',
  styleUrls: ['./creer-partie.component.css']
})
export class CreerPartieComponent implements OnInit {

  partie= new Partie();

  constructor(private srvCreator : CreationService) { }

  ngOnInit() {
    this.srvCreator.reload();

  }


  public creerPartie(partiePrive,nbrJoueurs){
    this.srvCreator.add(this.partie)

    
  }
}
