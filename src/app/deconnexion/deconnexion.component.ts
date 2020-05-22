import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private srvUser : UserService, private router: Router) {}

  ngOnInit() {
    this.srvUser.deconnexion();
    this.router.navigate (['/home']);
  }

  public deconnection() {
  }
}
