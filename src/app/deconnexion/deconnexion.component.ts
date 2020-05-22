import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  public user = null;

  constructor(private srvUser : UserService) { }

  ngOnInit(): void {
  }


  public deconnexion() {
    this.user = null;
    this.srvUser.deconnexion(this.user)
  }
}
