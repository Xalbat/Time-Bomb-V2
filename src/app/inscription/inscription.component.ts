import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user = new User;

  constructor(private srvUser : UserService) { }

  ngOnInit(): void {
  }

  public inscription() {
    alert(this.user);
    this.srvUser.inscription(this.user);
    this.user=new User();
  }

}
