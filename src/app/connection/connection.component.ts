import { Component, OnInit} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  public user: User = new User();

  constructor() {
    this.user.password="";
  }

  ngOnInit(): void {
  }

  public connection() {
    // Requete connection
  }

}
