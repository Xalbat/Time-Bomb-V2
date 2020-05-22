import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user = new User();

  constructor(private srvUser : UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public inscription() {
    this.srvUser.inscription(this.user);
    this.user=new User();
    this.router.navigate (['/home']);
  }

}
