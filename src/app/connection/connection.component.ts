import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  public user: User = new User();

  constructor(private srvUser : UserService) {

  }

  ngOnInit() : void{
   
  }

  public connection() {
    this.srvUser.connection(this.user)
  }

}
