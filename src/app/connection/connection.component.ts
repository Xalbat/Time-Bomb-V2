import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  public user = new User();

  constructor(private srvUser : UserService, private router: Router) {}

  ngOnInit() : void{}

  public connection() {
    this.srvUser.connection(this.user)
    this.router.navigate (['/home']);
  }

}
